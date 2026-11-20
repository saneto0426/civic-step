"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { rankActivities } from "@/lib/matching";
import Detail from "./_components/Detail";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Home from "./_components/Home";
import Quiz from "./_components/Quiz";
import Results from "./_components/Results";
import Saved from "./_components/Saved";
import { quiz, type Activity } from "./_data/mock-data";
import type { View } from "./_data/types";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [dbActivities, setDbActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [saved, setSaved] = useState<(string | number)[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Supabaseから活動データと口コミを取得して同期
  useEffect(() => {
    async function loadFromSupabase() {
      setLoading(true);
      const [{ data: actRows, error: actErr }, { data: revRows }] =
        await Promise.all([
          supabase
            .from("activities")
            .select("*")
            .order("created_at", { ascending: true }),
          supabase
            .from("reviews")
            .select("*")
            .order("created_at", { ascending: true }),
        ]);

      if (actErr) {
        console.error("Supabase取得エラー:", actErr.message);
        setLoading(false);
        return;
      }

      const formatted: Activity[] = (actRows || []).map((row) => {
        const relatedReviews = (revRows || []).filter(
          (r) => r.activity_id === row.id,
        );
        const tags: string[] = row.tags || [];
        const timeTag =
          tags.find(
            (t) =>
              t.includes("週") ||
              t.includes("月") ||
              t.includes("単発") ||
              t.includes("週末"),
          ) || "相談可";

        return {
          id: row.id,
          match: 90,
          title: row.title,
          category: row.category,
          place: row.location || "キャンパス周辺",
          time: timeTag,
          date: "随時募集中",
          image:
            row.image_url ||
            "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
          description: row.description,
          tags,
          growth:
            relatedReviews.length > 0
              ? relatedReviews.map((r) => r.growth_point)
              : ["チームワーク", "社会課題への理解", "実践的な行動力"],
          external_url:
            row.external_url || "https://aoyama-portal.aoyama.ac.jp/",
          reviews: relatedReviews,
        };
      });

      setDbActivities(formatted);
      if (formatted.length > 0) {
        setSelectedId(formatted[0].id);
      }
      setLoading(false);
    }

    loadFromSupabase();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  // 回答に応じてスコア計算＆ソートされた活動一覧
  const ranked = rankActivities(dbActivities, answers);
  const selected = ranked.find((a) => a.id === selectedId) || ranked[0];

  const navigate = (next: View) => {
    setView(next);
    setMobileMenu(false);
  };

  const startQuiz = () => {
    setQuizStep(0);
    setAnswers([]);
    navigate("quiz");
  };

  const answer = (value: string) => {
    const next = [...answers];
    next[quizStep] = value;
    setAnswers(next);
    if (quizStep < quiz.length - 1)
      setTimeout(() => setQuizStep(quizStep + 1), 140);
    else setTimeout(() => navigate("results"), 220);
  };

  const openDetail = (activity: Activity) => {
    setSelectedId(activity.id);
    navigate("detail");
  };

  const toggleSaved = (id: string | number) => {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <div className="min-h-screen bg-[#f7f8f3] text-[#163229]">
      <Header
        view={view}
        savedCount={saved.length}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        navigate={navigate}
        startQuiz={startQuiz}
      />
      <main>
        {loading ? (
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="font-serif text-lg text-[#075b3a] animate-pulse">
              活動データを読み込み中...
            </p>
          </div>
        ) : (
          <>
            {view === "home" && (
              <Home
                activities={ranked}
                startQuiz={startQuiz}
                openDetail={openDetail}
              />
            )}
            {view === "quiz" && (
              <Quiz
                step={quizStep}
                answers={answers}
                onAnswer={answer}
                onBack={() =>
                  quizStep ? setQuizStep(quizStep - 1) : navigate("home")
                }
              />
            )}
            {view === "results" && (
              <Results
                activities={ranked}
                answers={answers}
                saved={saved}
                toggleSaved={toggleSaved}
                openDetail={openDetail}
                startQuiz={startQuiz}
              />
            )}
            {view === "detail" && selected && (
              <Detail
                activity={selected}
                isSaved={saved.includes(selected.id)}
                toggleSaved={() => toggleSaved(selected.id)}
                back={() => navigate("results")}
              />
            )}
            {view === "saved" && (
              <Saved
                activities={ranked}
                saved={saved}
                openDetail={openDetail}
                startQuiz={startQuiz}
              />
            )}
          </>
        )}
      </main>
      {view !== "quiz" && <Footer navigate={navigate} />}
    </div>
  );
}

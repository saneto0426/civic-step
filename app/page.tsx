"use client";

import { useEffect, useState } from "react";
import Detail from "./_components/Detail";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Home from "./_components/Home";
import Quiz from "./_components/Quiz";
import Results from "./_components/Results";
import Saved from "./_components/Saved";
import { activities, quiz, type Activity } from "./_data/mock-data";
import type { View } from "./_data/types";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState(activities[0]);
  const [saved, setSaved] = useState<number[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

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
    setSelected(activity);
    navigate("detail");
  };

  const toggleSaved = (id: number) => {
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
        {view === "home" && (
          <Home startQuiz={startQuiz} openDetail={openDetail} />
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
            answers={answers}
            saved={saved}
            toggleSaved={toggleSaved}
            openDetail={openDetail}
            startQuiz={startQuiz}
          />
        )}
        {view === "detail" && (
          <Detail
            activity={selected}
            isSaved={saved.includes(selected.id)}
            toggleSaved={() => toggleSaved(selected.id)}
            back={() => navigate("results")}
          />
        )}
        {view === "saved" && (
          <Saved saved={saved} openDetail={openDetail} startQuiz={startQuiz} />
        )}
      </main>
      {view !== "quiz" && <Footer navigate={navigate} />}
    </div>
  );
}

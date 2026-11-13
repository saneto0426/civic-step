"use client";
import { useEffect, useState } from "react";

type IconName =
  | "arrow"
  | "bookmark"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "heart"
  | "leaf"
  | "location"
  | "menu"
  | "people"
  | "quote"
  | "sparkle"
  | "target"
  | "x";

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    bookmark: (
      <path d="M6 4.8A1.8 1.8 0 0 1 7.8 3h8.4A1.8 1.8 0 0 1 18 4.8V21l-6-3.5L6 21Z" />
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    leaf: (
      <>
        <path d="M20.8 3.2C13 3.6 6.5 5.5 4 10.2c-2 3.8.5 7.3 4.4 7.1 5.9-.2 9.8-6.6 12.4-14.1Z" />
        <path d="M3 21c2.6-5.7 6.4-9.3 12.1-11.6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    people: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    quote: (
      <>
        <path d="M9 11H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a4 4 0 0 0-4-4" />
        <path d="M21 11h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a4 4 0 0 0-4-4" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5Z" />
        <path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8Z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    x: (
      <>
        <path d="M18 6 6 18M6 6l12 12" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const activities = [
  {
    id: 1,
    match: 96,
    title: "週末の里山保全プロジェクト",
    category: "環境・自然",
    place: "相模原市 緑区",
    time: "土曜 3時間",
    date: "11月9日",
    image:
      "https://images.unsplash.com/photo-1758599668299-beebedfabf7b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200&h=800",
    description:
      "地域の方と一緒に、里山の遊歩道整備や落ち葉集めを行います。知識や経験は必要ありません。",
    tags: ["初心者歓迎", "友達と参加OK", "単発"],
    growth: ["チームワーク", "地域とのつながり", "環境への理解"],
  },
  {
    id: 2,
    match: 89,
    title: "子どもの学習サポーター",
    category: "教育・子ども",
    place: "渋谷区 神宮前",
    time: "水曜 2時間",
    date: "11月13日",
    image:
      "https://images.unsplash.com/photo-1759755486391-d7bd120924f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200&h=800",
    description:
      "放課後の居場所で、小学生の宿題や遊びをサポート。子どもと関わることが好きな学生におすすめです。",
    tags: ["未経験OK", "継続歓迎", "駅近"],
    growth: ["伝える力", "傾聴力", "責任感"],
  },
  {
    id: 3,
    match: 84,
    title: "海岸クリーンアップ",
    category: "環境・地域",
    place: "藤沢市 片瀬海岸",
    time: "日曜 2時間",
    date: "11月17日",
    image:
      "https://images.unsplash.com/photo-1758599669266-8036ddafdb63?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200&h=800",
    description:
      "海辺を歩きながらごみを集める、気軽なクリーン活動。終わった後は参加者同士の交流会もあります。",
    tags: ["1人参加多数", "単発", "屋外"],
    growth: ["行動力", "新しい出会い", "社会課題への理解"],
  },
];

const quiz = [
  {
    title: "まず、興味のある分野は？",
    sub: "直感でひとつ選んでください",
    options: [
      "環境・自然",
      "教育・子ども",
      "地域・まちづくり",
      "福祉・サポート",
    ],
  },
  {
    title: "どのくらいの頻度なら参加できそう？",
    sub: "今の生活に無理のない範囲で大丈夫です",
    options: [
      "まずは1回だけ",
      "月に1〜2回",
      "週に1回",
      "予定に合わせて決めたい",
    ],
  },
  {
    title: "活動で得たいものは？",
    sub: "あなたが少しでも惹かれるものを選んでください",
    options: [
      "新しい人との出会い",
      "就活にも活きる経験",
      "専門性やスキル",
      "誰かの役に立つ実感",
    ],
  },
  {
    title: "活動しやすいエリアは？",
    sub: "複数のエリアにまたがる活動もあります",
    options: [
      "青山キャンパス周辺",
      "相模原キャンパス周辺",
      "自宅の近く",
      "オンライン・場所は問わない",
    ],
  },
];

type View = "home" | "quiz" | "results" | "detail" | "saved";

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

  const openDetail = (activity: (typeof activities)[number]) => {
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

function Header({
  view,
  savedCount,
  mobileMenu,
  setMobileMenu,
  navigate,
  startQuiz,
}: {
  view: View;
  savedCount: number;
  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
  navigate: (v: View) => void;
  startQuiz: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0b5839]/10 bg-[#f7f8f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-3 text-left"
          aria-label="トップへ"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#075b3a] text-[#dcf26b]">
            <Icon name="leaf" size={19} />
          </span>
          <span>
            <strong className="block font-serif text-[17px] leading-none tracking-wide text-[#075b3a]">
              CIVIC STEP
            </strong>
            <small className="mt-1 block text-[9px] font-bold tracking-[.16em] text-[#557066]">
              AOYAMA GAKUIN
            </small>
          </span>
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => navigate("home")}
            className={`nav-link ${view === "home" ? "active" : ""}`}
          >
            ホーム
          </button>
          <button
            onClick={startQuiz}
            className={`nav-link ${view === "quiz" || view === "results" ? "active" : ""}`}
          >
            活動を探す
          </button>
          <button
            onClick={() => navigate("saved")}
            className={`nav-link flex items-center gap-1.5 ${view === "saved" ? "active" : ""}`}
          >
            保存した活動
            {savedCount > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#dcf26b] px-1 text-[10px] font-bold text-[#075b3a]">
                {savedCount}
              </span>
            )}
          </button>
          <button onClick={startQuiz} className="btn-primary !px-5 !py-2.5">
            30秒で診断する <Icon name="arrow" size={17} />
          </button>
        </nav>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="grid h-10 w-10 place-items-center rounded-full border border-[#075b3a]/15 md:hidden"
          aria-label="メニュー"
        >
          <Icon name={mobileMenu ? "x" : "menu"} />
        </button>
      </div>
      {mobileMenu && (
        <div className="border-t border-[#075b3a]/10 bg-[#f7f8f3] px-5 py-5 md:hidden">
          <div className="flex flex-col items-stretch gap-2">
            <button
              onClick={() => navigate("home")}
              className="rounded-xl px-4 py-3 text-left font-bold"
            >
              ホーム
            </button>
            <button
              onClick={startQuiz}
              className="rounded-xl px-4 py-3 text-left font-bold"
            >
              活動を探す
            </button>
            <button
              onClick={() => navigate("saved")}
              className="rounded-xl px-4 py-3 text-left font-bold"
            >
              保存した活動（{savedCount}）
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Home({
  startQuiz,
  openDetail,
}: {
  startQuiz: () => void;
  openDetail: (a: (typeof activities)[number]) => void;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f8f3]">
        <div className="absolute -right-40 top-12 h-[520px] w-[520px] rounded-full bg-[#dff0d8]/60 blur-3xl" />
        <div className="mx-auto grid min-h-[680px] max-w-[1240px] items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#075b3a]/15 bg-white/70 px-4 py-2 text-xs font-bold text-[#075b3a]">
              <Icon name="sparkle" size={15} />{" "}
              青学生のためのボランティアマッチング
            </div>
            <h1 className="font-serif text-[clamp(3rem,6vw,5.7rem)] font-semibold leading-[1.03] tracking-[-.055em] text-[#0a593b]">
              小さな一歩が、
              <br />
              <span className="relative inline-block text-[#163229]">
                未来をひらく。
                <svg
                  className="absolute -bottom-3 left-0 w-full text-[#badb56]"
                  viewBox="0 0 390 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10C108 1 252 3 388 6"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-9 max-w-[540px] text-base leading-8 text-[#536a62] md:text-lg">
              「興味はあるけど、何から始めればいい？」
              <br className="hidden sm:block" />
              いくつかの質問に答えるだけで、あなたに合う社会参加が見つかります。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button onClick={startQuiz} className="btn-primary group">
                30秒でぴったりの活動を探す
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                  <Icon name="arrow" size={18} />
                </span>
              </button>
              <span className="flex items-center gap-2 px-3 text-xs font-bold text-[#687b74]">
                <Icon name="check" size={16} className="text-[#0a7a4c]" />
                登録不要・すぐに結果が見られます
              </span>
            </div>
            <div className="mt-10 flex items-center gap-8 border-t border-[#075b3a]/10 pt-6">
              <div>
                <strong className="font-serif text-2xl text-[#075b3a]">
                  24
                </strong>
                <span className="ml-1 text-xs text-[#687b74]">活動掲載中</span>
              </div>
              <div className="h-8 w-px bg-[#075b3a]/10" />
              <div>
                <strong className="font-serif text-2xl text-[#075b3a]">
                  92%
                </strong>
                <span className="ml-1 text-xs text-[#687b74]">初心者歓迎</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[510px] w-full max-w-[540px]">
            <div className="absolute right-0 top-0 h-[430px] w-[82%] overflow-hidden rounded-[180px_180px_28px_28px]">
              <img
                src={activities[0].image}
                alt="地域で清掃活動をするボランティア"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#063a28]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-3 left-0 w-[260px] rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_18px_50px_rgba(12,65,45,.15)] backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-[#71827c]">
                  YOUR MATCH
                </span>
                <span className="rounded-full bg-[#e7f3c3] px-2.5 py-1 text-xs font-extrabold text-[#075b3a]">
                  96% MATCH
                </span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold">
                週末の里山保全
              </h3>
              <div className="mt-3 flex gap-4 text-[11px] font-medium text-[#61736d]">
                <span className="flex items-center gap-1">
                  <Icon name="location" size={13} />
                  相模原
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="clock" size={13} />
                  3時間
                </span>
              </div>
            </div>
            <div className="absolute right-[-2px] top-[72px] grid h-[94px] w-[94px] place-items-center rounded-full border-[7px] border-[#f7f8f3] bg-[#dcf26b] text-[#075b3a]">
              <div className="text-center">
                <Icon name="heart" size={23} className="mx-auto" />
                <span className="mt-1 block text-[9px] font-extrabold tracking-wider">
                  START HERE
                </span>
              </div>
            </div>
            <p className="absolute bottom-1 right-0 text-[10px] text-[#82908b]">
              Photo by Vitaly Gariev / Unsplash
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#075b3a] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="eyebrow text-[#dcf26b]">HOW IT WORKS</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
                あなたの「やってみたい」を
                <br />
                3ステップで形に。
              </h2>
              <p className="mt-6 max-w-md leading-7 text-white/65">
                難しい準備はいりません。今の気持ちや興味を起点に、無理なく始められる活動をご案内します。
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15 md:grid-cols-3">
              {[
                [
                  "01",
                  "答える",
                  "興味や使える時間など、かんたんな4つの質問に回答。",
                  "target",
                ],
                [
                  "02",
                  "見つける",
                  "あなたらしさに合う活動を、マッチ度と一緒に提案。",
                  "sparkle",
                ],
                [
                  "03",
                  "踏み出す",
                  "体験談を読んで納得したら、公式窓口から申し込み。",
                  "arrow",
                ],
              ].map(([num, title, text, icon]) => (
                <div
                  key={num}
                  className="group bg-[#0c6544] p-7 transition-colors hover:bg-[#11734e] md:min-h-[320px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-sm text-[#dcf26b]">
                      {num}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-[#dcf26b]">
                      <Icon name={icon as IconName} />
                    </span>
                  </div>
                  <h3 className="mt-24 font-serif text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#0a754a]">PICK UP</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
                今週、はじめられること。
              </h2>
            </div>
            <button
              onClick={startQuiz}
              className="flex items-center gap-2 self-start border-b border-[#075b3a] pb-1 text-sm font-bold text-[#075b3a]"
            >
              すべての活動を見る <Icon name="arrow" size={16} />
            </button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                openDetail={openDetail}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#075b3a]/10 bg-[#edf1e8] py-20">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 md:grid-cols-[.8fr_1.2fr] md:px-8">
          <div className="relative mx-auto h-64 w-64">
            <div className="absolute inset-0 rounded-full bg-[#c9dfb6]" />
            <img
              src="https://images.unsplash.com/photo-1758599668178-d9716bbda9d5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=600&h=600"
              alt="活動に参加した学生"
              className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] rounded-full object-cover"
            />
            <span className="absolute right-0 top-4 grid h-14 w-14 place-items-center rounded-full bg-[#dcf26b] text-[#075b3a]">
              <Icon name="quote" />
            </span>
          </div>
          <div>
            <p className="eyebrow text-[#0a754a]">STUDENT VOICE</p>
            <blockquote className="mt-5 font-serif text-2xl font-medium leading-[1.65] text-[#1a3a30] md:text-3xl">
              「最初は就活のため、くらいの気持ちでした。でも活動先で出会った人たちのおかげで、自分の視野がぐっと広がりました。」
            </blockquote>
            <p className="mt-6 text-sm font-bold text-[#075b3a]">
              経済学部 2年{" "}
              <span className="ml-2 font-normal text-[#718079]">
                里山保全プロジェクトに参加
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ActivityCard({
  activity,
  openDetail,
}: {
  activity: (typeof activities)[number];
  openDetail: (a: (typeof activities)[number]) => void;
}) {
  return (
    <article
      onClick={() => openDetail(activity)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-extrabold text-[#075b3a] backdrop-blur">
          {activity.category}
        </span>
        <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-[#dcf26b] text-[#075b3a] transition-transform group-hover:translate-x-1">
          <Icon name="arrow" />
        </span>
      </div>
      <div className="pt-5">
        <div className="flex items-center gap-4 text-xs font-medium text-[#6b7b75]">
          <span className="flex items-center gap-1.5">
            <Icon name="calendar" size={14} />
            {activity.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="clock" size={14} />
            {activity.time}
          </span>
        </div>
        <h3 className="mt-3 font-serif text-xl font-semibold transition-colors group-hover:text-[#08724a]">
          {activity.title}
        </h3>
      </div>
    </article>
  );
}

function Quiz({
  step,
  answers,
  onAnswer,
  onBack,
}: {
  step: number;
  answers: string[];
  onAnswer: (v: string) => void;
  onBack: () => void;
}) {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-[#075b3a] px-5 py-12 text-white">
      <div className="quiz-orb left-[-100px] top-[-100px]" />
      <div className="quiz-orb bottom-[-180px] right-[-80px]" />
      <div className="relative z-10 mx-auto w-full max-w-[760px]">
        <div className="mb-9 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white"
          >
            <Icon name="chevron" className="rotate-180" size={18} /> 戻る
          </button>
          <span className="text-xs font-bold tracking-[.15em] text-[#dcf26b]">
            QUESTION {String(step + 1).padStart(2, "0")} /{" "}
            {String(quiz.length).padStart(2, "0")}
          </span>
        </div>
        <div className="mb-10 flex gap-2">
          {quiz.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-[#dcf26b]" : "bg-white/15"}`}
            />
          ))}
        </div>
        <div className="rounded-[28px] bg-[#f7f8f3] p-6 text-[#163229] shadow-2xl md:p-12">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e8f2d8] text-[#075b3a]">
            <Icon
              name={
                step === 0
                  ? "heart"
                  : step === 1
                    ? "clock"
                    : step === 2
                      ? "sparkle"
                      : "location"
              }
            />
          </span>
          <h1 className="mt-7 font-serif text-3xl font-semibold md:text-4xl">
            {quiz[step].title}
          </h1>
          <p className="mt-3 text-sm text-[#718079]">{quiz[step].sub}</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {quiz[step].options.map((option, i) => (
              <button
                key={option}
                onClick={() => onAnswer(option)}
                className={`group flex min-h-[76px] items-center justify-between rounded-2xl border p-5 text-left font-bold transition ${answers[step] === option ? "border-[#075b3a] bg-[#eaf1e5]" : "border-[#dce2db] bg-white hover:border-[#88aa99] hover:bg-[#f3f6ef]"}`}
              >
                <span>
                  <small className="mr-3 font-serif text-[#8a9a94]">
                    {String.fromCharCode(65 + i)}
                  </small>
                  {option}
                </span>
                <span className="grid h-7 w-7 place-items-center rounded-full border border-[#b9c6bf] text-transparent transition group-hover:border-[#075b3a] group-hover:text-[#075b3a]">
                  <Icon name="check" size={15} />
                </span>
              </button>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/45">
          正解・不正解はありません。今の気持ちに近いものを選んでください。
        </p>
      </div>
    </section>
  );
}

function Results({
  answers,
  saved,
  toggleSaved,
  openDetail,
  startQuiz,
}: {
  answers: string[];
  saved: number[];
  toggleSaved: (id: number) => void;
  openDetail: (a: (typeof activities)[number]) => void;
  startQuiz: () => void;
}) {
  return (
    <section className="pb-24">
      <div className="bg-[#075b3a] px-5 py-16 text-center text-white md:py-20">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#dcf26b] text-[#075b3a]">
          <Icon name="sparkle" size={26} />
        </span>
        <p className="mt-6 text-xs font-bold tracking-[.18em] text-[#dcf26b]">
          YOUR CIVIC MATCH
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
          あなたに合う活動が見つかりました。
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-white/65">
          「{answers[0] || "環境・自然"}
          」への興味と、参加しやすいペースをもとに選んだ上位3件です。
        </p>
      </div>
      <div className="mx-auto max-w-[1060px] px-5 md:px-8">
        <div className="-mt-7 flex items-center justify-between rounded-2xl border border-[#075b3a]/10 bg-white px-5 py-4 shadow-sm">
          <span className="text-sm text-[#65766f]">
            <strong className="text-[#163229]">3件</strong> のおすすめ
          </span>
          <button
            onClick={startQuiz}
            className="text-xs font-bold text-[#075b3a] underline underline-offset-4"
          >
            診断をやり直す
          </button>
        </div>
        <div className="mt-8 space-y-5">
          {activities.map((activity, index) => (
            <article
              key={activity.id}
              className="grid overflow-hidden rounded-2xl border border-[#dce3dc] bg-white transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[300px_1fr]"
            >
              <div className="relative min-h-[230px] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[#dcf26b] px-3 py-1.5 text-xs font-extrabold text-[#075b3a]">
                  #{index + 1} おすすめ
                </span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-[#0a7a4c]">
                      {activity.category}
                    </span>
                    <h2 className="mt-2 font-serif text-2xl font-semibold">
                      {activity.title}
                    </h2>
                  </div>
                  <div className="shrink-0 text-center">
                    <strong className="font-serif text-2xl text-[#075b3a]">
                      {activity.match}%
                    </strong>
                    <small className="block text-[9px] font-bold tracking-wider text-[#82908b]">
                      MATCH
                    </small>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#64756e]">
                  <span className="flex items-center gap-1.5">
                    <Icon name="calendar" size={15} />
                    {activity.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="clock" size={15} />
                    {activity.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="location" size={15} />
                    {activity.place}
                  </span>
                </div>
                <p className="mt-5 line-clamp-2 text-sm leading-7 text-[#677771]">
                  {activity.description}
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => openDetail(activity)}
                    className="btn-primary !px-5 !py-2.5 !text-sm"
                  >
                    詳しく見る <Icon name="arrow" size={16} />
                  </button>
                  <button
                    onClick={() => toggleSaved(activity.id)}
                    className={`grid h-11 w-11 place-items-center rounded-full border transition ${saved.includes(activity.id) ? "border-[#075b3a] bg-[#e7f0e5] text-[#075b3a]" : "border-[#ccd5cf] text-[#73817c] hover:border-[#075b3a]"}`}
                    aria-label="保存"
                  >
                    <Icon
                      name="bookmark"
                      size={18}
                      className={
                        saved.includes(activity.id) ? "fill-current" : ""
                      }
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail({
  activity,
  isSaved,
  toggleSaved,
  back,
}: {
  activity: (typeof activities)[number];
  isSaved: boolean;
  toggleSaved: () => void;
  back: () => void;
}) {
  const [showApply, setShowApply] = useState(false);
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-[1180px] px-5 py-7 md:px-8">
        <button
          onClick={back}
          className="flex items-center gap-2 text-sm font-bold text-[#60736b] hover:text-[#075b3a]"
        >
          <Icon name="chevron" className="rotate-180" size={17} />
          おすすめ一覧へ戻る
        </button>
      </div>
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="relative h-[390px] overflow-hidden rounded-[28px] md:h-[500px]">
          <img
            src={activity.image}
            alt={activity.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082e22]/65 via-transparent to-transparent" />
          <div className="absolute bottom-7 left-7 right-7 text-white md:bottom-10 md:left-10">
            <span className="rounded-full bg-[#dcf26b] px-3 py-1.5 text-xs font-extrabold text-[#075b3a]">
              {activity.category}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-semibold md:text-5xl">
              {activity.title}
            </h1>
          </div>
        </div>
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#dce3dc] bg-[#dce3dc]">
              {[
                ["calendar", "開催日", activity.date],
                ["clock", "所要時間", activity.time],
                ["location", "場所", activity.place],
              ].map(([icon, label, value]) => (
                <div key={label} className="bg-white p-4 text-center md:p-5">
                  <Icon
                    name={icon as IconName}
                    size={19}
                    className="mx-auto text-[#0a754a]"
                  />
                  <small className="mt-2 block text-[10px] font-bold text-[#83918c]">
                    {label}
                  </small>
                  <strong className="mt-1 block text-xs md:text-sm">
                    {value}
                  </strong>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="eyebrow text-[#0a754a]">ABOUT</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">
                活動について
              </h2>
              <p className="mt-6 leading-8 text-[#5d7169]">
                {activity.description}{" "}
                当日は担当スタッフが進め方を説明するので、初めてでも安心して参加できます。必要な道具は活動先で用意します。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#e8efe4] px-4 py-2 text-xs font-bold text-[#376052]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-14 border-t border-[#d7dfd8] pt-12">
              <p className="eyebrow text-[#0a754a]">WHAT YOU GET</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">
                この活動で得られること
              </h2>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {activity.growth.map((item, i) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#dce3dc] bg-white p-5"
                  >
                    <span className="font-serif text-sm text-[#92b46c]">
                      0{i + 1}
                    </span>
                    <strong className="mt-8 block text-sm">{item}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-14 rounded-2xl bg-[#e9efe5] p-7 md:p-9">
              <Icon name="quote" className="text-[#0a754a]" />
              <blockquote className="mt-5 font-serif text-xl leading-9">
                最初は一人で不安でしたが、スタッフの方が話しかけてくれてすぐ馴染めました。授業だけでは出会えない地域の方と話せたのが一番の収穫です。
              </blockquote>
              <p className="mt-5 text-xs font-bold text-[#547067]">
                国際政治経済学部 2年・初参加
              </p>
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-[#dce3dc] bg-white p-6 shadow-[0_14px_40px_rgba(19,65,49,.08)]">
              <div className="flex items-end justify-between">
                <div>
                  <small className="font-bold tracking-wider text-[#7a8983]">
                    あなたとのマッチ度
                  </small>
                  <strong className="mt-1 block font-serif text-4xl text-[#075b3a]">
                    {activity.match}%
                  </strong>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e8f2d8] text-[#075b3a]">
                  <Icon name="target" />
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e6ebe7]">
                <div
                  className="h-full rounded-full bg-[#8fbd54]"
                  style={{ width: `${activity.match}%` }}
                />
              </div>
              <p className="mt-5 text-xs leading-6 text-[#687a73]">
                あなたの興味と希望する参加ペースに、とてもよく合っています。
              </p>
              <button
                onClick={() => setShowApply(true)}
                className="btn-primary mt-6 w-full justify-center"
              >
                この活動に申し込む <Icon name="arrow" size={17} />
              </button>
              <button
                onClick={toggleSaved}
                className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full border py-3 text-sm font-bold transition ${isSaved ? "border-[#075b3a] bg-[#edf3e9] text-[#075b3a]" : "border-[#cdd7d0] text-[#5d7069]"}`}
              >
                <Icon
                  name="bookmark"
                  size={17}
                  className={isSaved ? "fill-current" : ""}
                />
                {isSaved ? "保存済み" : "あとで見る"}
              </button>
              <p className="mt-5 text-center text-[10px] leading-5 text-[#8a9692]">
                申し込み時にAOYAMA-portalへ移動します
              </p>
            </div>
          </aside>
        </div>
      </div>
      {showApply && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#082e22]/60 p-5 backdrop-blur-sm"
          onClick={() => setShowApply(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e8f2d8] text-[#075b3a]">
              <Icon name="arrow" size={25} />
            </span>
            <h2 className="mt-5 font-serif text-2xl font-semibold">
              公式ポータルへ移動します
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#687a73]">
              このデモでは外部サイトへの遷移は行いません。実運用時はAOYAMA-portalの申し込み画面へ接続されます。
            </p>
            <button
              onClick={() => setShowApply(false)}
              className="btn-primary mt-7 w-full justify-center"
            >
              内容を確認しました
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function Saved({
  saved,
  openDetail,
  startQuiz,
}: {
  saved: number[];
  openDetail: (a: (typeof activities)[number]) => void;
  startQuiz: () => void;
}) {
  const items = activities.filter((a) => saved.includes(a.id));
  return (
    <section className="mx-auto min-h-[65vh] max-w-[1180px] px-5 py-16 md:px-8 md:py-20">
      <p className="eyebrow text-[#0a754a]">SAVED</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
        保存した活動
      </h1>
      <p className="mt-4 text-[#677971]">
        気になった活動を、あとからゆっくり比較できます。
      </p>
      {items.length > 0 ? (
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {items.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              openDetail={openDetail}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-3xl border border-dashed border-[#b9c8be] bg-[#edf1e9] px-5 py-20 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-[#075b3a]">
            <Icon name="bookmark" />
          </span>
          <h2 className="mt-5 font-serif text-2xl font-semibold">
            まだ保存した活動はありません
          </h2>
          <p className="mt-3 text-sm text-[#718079]">
            まずは診断して、気になる活動を見つけてみましょう。
          </p>
          <button onClick={startQuiz} className="btn-primary mt-7">
            活動を探す <Icon name="arrow" size={17} />
          </button>
        </div>
      )}
    </section>
  );
}

function Footer({ navigate }: { navigate: (v: View) => void }) {
  return (
    <footer className="bg-[#082e22] px-5 py-14 text-white md:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-10 md:flex-row">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#dcf26b] text-[#075b3a]">
              <Icon name="leaf" size={18} />
            </span>
            <strong className="font-serif text-lg tracking-wide">
              CIVIC STEP
            </strong>
          </div>
          <p className="mt-4 text-xs leading-6 text-white/45">
            青山学院大学 シビックエンゲージメントセンター
            <br />
            学生の社会参加を、もっと身近に。
          </p>
        </div>
        <div className="flex gap-8 text-xs font-bold text-white/65">
          <button onClick={() => navigate("home")} className="hover:text-white">
            ホーム
          </button>
          <button onClick={() => navigate("quiz")} className="hover:text-white">
            活動を探す
          </button>
          <button
            onClick={() => navigate("saved")}
            className="hover:text-white"
          >
            保存した活動
          </button>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1240px] flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] text-white/35 sm:flex-row">
        <span>© 2026 Aoyama Gakuin University. Prototype.</span>
        <span>地の塩、世の光</span>
      </div>
    </footer>
  );
}

import type { Activity } from "../_data/mock-data";
import type { IconName } from "./Icon";
import Icon from "./Icon";

export default function Home({
  activities,
  startQuiz,
  openDetail,
}: {
  activities: Activity[];
  startQuiz: () => void;
  openDetail: (a: Activity) => void;
}) {
  const featured = activities[0];
  const sampleReview = featured?.reviews?.[0];

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
                  {activities.length}
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

          {featured && (
            <div className="relative mx-auto h-[510px] w-full max-w-[540px]">
              <div className="absolute right-0 top-0 h-[430px] w-[82%] overflow-hidden rounded-[180px_180px_28px_28px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063a28]/40 via-transparent to-transparent" />
              </div>
              <div
                onClick={() => openDetail(featured)}
                className="cursor-pointer absolute bottom-3 left-0 w-[260px] rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_18px_50px_rgba(12,65,45,.15)] backdrop-blur transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider text-[#71827c]">
                    PICK UP
                  </span>
                  <span className="rounded-full bg-[#e7f3c3] px-2.5 py-1 text-xs font-extrabold text-[#075b3a]">
                    {featured.category}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold line-clamp-2">
                  {featured.title}
                </h3>
                <div className="mt-3 flex gap-4 text-[11px] font-medium text-[#61736d]">
                  <span className="flex items-center gap-1 truncate">
                    <Icon name="location" size={13} />
                    {featured.place}
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
            </div>
          )}
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
              「
              {sampleReview
                ? sampleReview.content
                : "最初は就活のため、くらいの気持ちでした。でも活動先で出会った人たちのおかげで、自分の視野がぐっと広がりました。"}
              」
            </blockquote>
            <p className="mt-6 text-sm font-bold text-[#075b3a]">
              {sampleReview ? sampleReview.user_faculty : "経済学部 2年"}{" "}
              <span className="ml-2 font-normal text-[#718079]">
                {featured ? `${featured.title} に参加` : ""}
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function ActivityCard({
  activity,
  openDetail,
}: {
  activity: Activity;
  openDetail: (a: Activity) => void;
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

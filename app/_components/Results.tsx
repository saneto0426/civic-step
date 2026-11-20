import type { Activity } from "../_data/mock-data";
import Icon from "./Icon";

export default function Results({
  activities,
  answers,
  saved,
  toggleSaved,
  openDetail,
  startQuiz,
}: {
  activities: Activity[];
  answers: string[];
  saved: (string | number)[];
  toggleSaved: (id: string | number) => void;
  openDetail: (a: Activity) => void;
  startQuiz: () => void;
}) {
  const topThree = activities.slice(0, 3);

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
          「{answers[0] || "興味分野"}」と「{answers[1] || "希望ペース"}
          」をもとに選んだ上位{topThree.length}件です。
        </p>
      </div>
      <div className="mx-auto max-w-[1060px] px-5 md:px-8">
        <div className="-mt-7 flex items-center justify-between rounded-2xl border border-[#075b3a]/10 bg-white px-5 py-4 shadow-sm">
          <span className="text-sm text-[#65766f]">
            <strong className="text-[#163229]">{topThree.length}件</strong>{" "}
            のおすすめ
          </span>
          <button
            onClick={startQuiz}
            className="text-xs font-bold text-[#075b3a] underline underline-offset-4"
          >
            診断をやり直す
          </button>
        </div>
        <div className="mt-8 space-y-5">
          {topThree.map((activity, index) => (
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

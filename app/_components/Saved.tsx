import type { Activity } from "../_data/mock-data";
import { ActivityCard } from "./Home";
import Icon from "./Icon";

export default function Saved({
  activities,
  saved,
  openDetail,
  startQuiz,
}: {
  activities: Activity[];
  saved: (string | number)[];
  openDetail: (a: Activity) => void;
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

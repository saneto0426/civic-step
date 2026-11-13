import { useState } from "react";
import type { Activity } from "../_data/mock-data";
import type { IconName } from "./Icon";
import Icon from "./Icon";

export default function Detail({
  activity,
  isSaved,
  toggleSaved,
  back,
}: {
  activity: Activity;
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

import { quiz } from "../_data/mock-data";
import Icon from "./Icon";

export default function Quiz({
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

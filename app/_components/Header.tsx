import Icon from "./Icon";
import type { View } from "../_data/types";

export default function Header({
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

import Icon from "./Icon";
import type { View } from "../_data/types";

export default function Footer({ navigate }: { navigate: (v: View) => void }) {
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

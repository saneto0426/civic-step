export const activities = [
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

export const quiz = [
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

export type Activity = (typeof activities)[number];

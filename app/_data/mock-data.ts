export type Review = {
  id: string;
  user_faculty: string;
  content: string;
  growth_point: string;
};

export type Activity = {
  id: string | number;
  match: number;
  title: string;
  category: string;
  place: string;
  time: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
  growth: string[];
  external_url?: string;
  reviews?: Review[];
};

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

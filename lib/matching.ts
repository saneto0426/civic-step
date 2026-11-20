import type { Activity } from "@/app/_data/mock-data";

export function rankActivities(
  activities: Activity[],
  answers: string[],
): Activity[] {
  if (!answers || answers.length === 0) return activities;

  const [interest, frequency, goal, area] = answers;

  return activities
    .map((activity) => {
      let score = 68;
      const text = [
        activity.title,
        activity.category,
        activity.place,
        activity.time,
        activity.description,
        ...(activity.tags || []),
      ].join(" ");

      // Q1: 興味分野
      if (interest) {
        const keyword = interest.split("・")[0]; // 「環境」「教育」「地域」「福祉」
        if (text.includes(keyword)) score += 14;
      }

      // Q2: 参加頻度
      if (frequency) {
        if (
          frequency.includes("1回") &&
          (text.includes("単発") || text.includes("週末"))
        )
          score += 8;
        else if (frequency.includes("週") && text.includes("週")) score += 8;
        else if (frequency.includes("月") && text.includes("月")) score += 8;
        else score += 4;
      }

      // Q3: 得たい経験
      if (goal) {
        if (
          goal.includes("就活") &&
          (text.includes("就活") || text.includes("企画"))
        )
          score += 6;
        else if (
          goal.includes("出会い") &&
          (text.includes("交流") ||
            text.includes("チーム") ||
            text.includes("コミュニケーション"))
        )
          score += 6;
        else score += 3;
      }

      // Q4: エリア
      if (area) {
        if (
          area.includes("青山") &&
          (activity.place.includes("青山") || activity.place.includes("渋谷"))
        )
          score += 3;
        else if (area.includes("相模原") && activity.place.includes("相模原"))
          score += 3;
        else score += 1;
      }

      return {
        ...activity,
        match: Math.min(score, 99),
      };
    })
    .sort((a, b) => b.match - a.match);
}

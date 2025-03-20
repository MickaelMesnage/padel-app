export const LEVELS = [
  "ONE",
  "TWO",
  "THREE",
  "THREE_PLUS",
  "FOUR",
  "FOUR_PLUS",
  "FIVE",
  "FIVE_PLUS",
  "SIX",
  "SIX_PLUS",
  "SEVEN",
  "EIGHT",
  "NINE",
  "TEN",
] as const;

export type Level = (typeof LEVELS)[number];

export const levelMap: Record<Level, string> = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
  THREE_PLUS: "3+",
  FOUR: "4",
  FOUR_PLUS: "4+",
  FIVE: "5",
  FIVE_PLUS: "5+",
  SIX: "6",
  SIX_PLUS: "6+",
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  TEN: "10",
};

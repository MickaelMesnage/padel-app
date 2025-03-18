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

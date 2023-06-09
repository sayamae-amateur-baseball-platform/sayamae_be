export const BattingType = {
  LEFT: 1,
  RIGHT: 2,
} as const;

export type BattingType = (typeof BattingType)[keyof typeof BattingType];

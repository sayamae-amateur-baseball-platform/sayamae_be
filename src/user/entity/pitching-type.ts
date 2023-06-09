export const PitchingType = {
  LEFT: 1,
  RIGHT: 2,
} as const;

export type PitchingType = (typeof PitchingType)[keyof typeof PitchingType];

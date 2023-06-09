export const Sex = {
  MALE: 1,
  FEMALE: 2,
} as const;

export type Sex = (typeof Sex)[keyof typeof Sex];

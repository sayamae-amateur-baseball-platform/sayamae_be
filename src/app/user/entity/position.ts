export const Position = {
  /**
   * 투수
   */
  P: 1,

  /**
   * 포수
   */
  C: 2,

  /**
   * 1루수
   */
  '1B': 3,

  /**
   * 2루수
   */
  '2B': 4,

  /**
   * 3루수
   */
  '3B': 5,

  /**
   * 유격수
   */
  SS: 6,

  /**
   * 중견수
   */
  CF: 7,

  /**
   * 우익수
   */
  RF: 8,

  /**
   * 좌익수
   */
  LF: 9,

  /**
   * 지명타자
   */
  DH: 10,
} as const;

export type Position = (typeof Position)[keyof typeof Position];

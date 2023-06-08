import { BattingType } from './batting-type';
import { PitchingType } from './pitching-type';
import { Sex } from './sex';

export abstract class User {
  /**
   * 유저 고유 ID
   */
  id: number;

  /**
   * 유저 이름
   * 로그인 할때 사용
   */
  userName: string;

  /**
   * 닉네임
   */
  nickname: string;

  /**
   * 비밀번호
   */
  password: string;

  /**
   * 이름
   */
  name: string;

  /**
   * 성별
   */
  sex: Sex;

  /**
   * 생년월일
   */
  birthDate: string;

  /**
   * S3에 저장한 사진 URL
   */
  photo: string;

  /**
   * 핸드폰 번호
   */
  phoneNumber: string;

  /**
   * 희망 포지션
   */
  hopePosition: string; //TODO: 포지션이 정해져 있을테니까 enum으로 변경

  /**
   * 타격 좌/우
   */
  battingType: BattingType;

  /**
   * 투수 좌/우
   */
  pitchingType: PitchingType;
}

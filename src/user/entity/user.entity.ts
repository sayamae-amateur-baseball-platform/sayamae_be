import { BattingType } from './batting-type';
import { PitchingType } from './pitching-type';
import { Sex } from './sex';
import {
  IsDateString,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from 'class-validator';

export class User {
  /**
   * 닉네임
   */
  @IsString()
  @IsNotEmpty()
  nickname: string;

  /**
   * 비밀번호
   */
  @IsString()
  @IsNotEmpty()
  password: string;

  /**
   * 이름
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * 성별
   */
  @IsEnum(Sex, { message: '올바른 성별 형식이 아닙니다.' })
  @IsNotEmpty()
  sex: Sex;

  /**
   * 생년월일
   */
  @IsDateString()
  @IsNotEmpty()
  birthDate: string;

  /**
   * S3에 저장한 사진 URL
   */
  @IsString()
  @IsNotEmpty()
  photo: string;

  /**
   * 핸드폰 번호
   */
  @IsMobilePhone('ko-KR')
  @IsNumberString()
  @IsNotEmpty()
  phoneNumber: string;

  /**
   * 희망 포지션
   */
  @IsString()
  @IsNotEmpty()
  hopePosition: string; //TODO: 포지션이 정해져 있을테니까 enum으로 변경

  /**
   * 타격 좌/우
   */
  @IsEnum(BattingType)
  @IsNotEmpty()
  battingType: BattingType;

  /**
   * 투수 좌/우
   */
  @IsEnum(PitchingType, { message: '올바른 투수 형식이 아닙니다.' })
  @IsNotEmpty()
  pitchingType: PitchingType;
}

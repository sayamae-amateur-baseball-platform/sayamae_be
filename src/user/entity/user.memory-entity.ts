import {
  IsDateString,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

import { BattingType } from './batting-type';
import { PitchingType } from './pitching-type';
import { Sex } from './sex';
import { User } from './user.entity';

export class UserMemoryEntity implements User {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Sex)
  @IsNotEmpty()
  sex: Sex;

  @IsDateString()
  @IsNotEmpty()
  birthDate: string;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @IsMobilePhone('ko-KR')
  @IsNumberString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  hopePosition: string;

  @IsEnum(BattingType)
  @IsNotEmpty()
  battingType: BattingType;

  @IsEnum(PitchingType)
  @IsNotEmpty()
  pitchingType: PitchingType;

  static of(
    id: number,
    userName: string,
    nickname: string,
    password: string,
    name: string,
    sex: Sex,
    birthDate: string,
    photo: string,
    phoneNumber: string,
    hopePosition: string,
    battingType: BattingType,
    pitchingType: PitchingType,
  ): UserMemoryEntity {
    const user = new UserMemoryEntity();
    user.id = id;
    user.userName = userName;
    user.nickname = nickname;
    user.password = password;
    user.name = name;
    user.sex = sex;
    user.birthDate = birthDate;
    user.photo = photo;
    user.phoneNumber = phoneNumber;
    user.hopePosition = hopePosition;
    user.battingType = battingType;
    user.pitchingType = pitchingType;

    return user;
  }
}

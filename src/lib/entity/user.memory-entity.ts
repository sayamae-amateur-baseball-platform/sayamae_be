import {
  IsDateString,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from 'class-validator';

import { BattingType } from '../../user/entity/batting-type';
import { PitchingType } from '../../user/entity/pitching-type';
import { Sex } from '../../user/entity/sex';
import { User } from '../../user/entity/user.entity';

export class UserMemoryEntity implements User {
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
}

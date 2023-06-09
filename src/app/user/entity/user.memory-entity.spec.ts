import { validateSync, ValidationError } from 'class-validator';
import { UserMemoryEntity } from './user.memory-entity';
import { Sex } from './sex';
import { BattingType } from './batting-type';
import { PitchingType } from './pitching-type';
import { Position } from './position';

describe('UserMemoryEntity', () => {
  let user: UserMemoryEntity;

  const id = 1;
  const userName = 'userName';
  const nickname = 'nickname';
  const password = 'password';
  const name = 'name';
  const birthDate = '2020-01-01';
  const photo = 'photo';
  const phoneNumber = '01012345678';
  const sex = Sex.MALE;
  const hopePosition = Position.P;
  const battingType = BattingType.LEFT;
  const pitchingType = PitchingType.RIGHT;

  beforeEach(() => {
    user = UserMemoryEntity.of(
      id,
      userName,
      nickname,
      password,
      name,
      birthDate,
      photo,
      phoneNumber,
      sex,
      hopePosition,
      battingType,
      pitchingType,
    );
  });

  it('유저 생성 제대로 생성 됨?', () => {
    const errors: ValidationError[] = validateSync(user);

    expect(errors.length).toBe(0);

    expect(user.nickname).toBe(nickname);
    expect(user.password).toBe(password);
    expect(user.name).toBe(name);
    expect(user.sex).toBe(sex);
    expect(user.birthDate).toBe(birthDate);
    expect(user.photo).toBe(photo);
    expect(user.phoneNumber).toBe(phoneNumber);
    expect(user.hopePosition).toBe(hopePosition);
    expect(user.battingType).toBe(battingType);
  });

  describe('유저 전화번호 유효성 테스트', () => {
    it('유저 전화번호 앞자리 011 넣으면 오류 안남?', () => {
      user.phoneNumber = '01112345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(0);
    });

    it('유저 전화번호 앞자리 016 넣으면 오류 안남?', () => {
      user.phoneNumber = '01612345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(0);
    });

    it('유저 전화번호 앞자리 017 넣으면 오류 안남?', () => {
      user.phoneNumber = '01712345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(0);
    });

    it('유저 전화번호 앞자리 018 넣으면 오류 안남?', () => {
      user.phoneNumber = '01812345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(0);
    });

    it('유저 전화번호 앞자리 019 넣으면 오류 안남?', () => {
      user.phoneNumber = '01912345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(0);
    });

    it('유저 전화번호 앞자리 123 넣으면 오류 남?', () => {
      user.phoneNumber = '12312345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('phoneNumber');
    });

    it('유저 전화번호 앞자리 012 넣으면 오류 남?', () => {
      user.phoneNumber = '01212345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('phoneNumber');
    });

    it('유저 전화번호 앞자리 013 넣으면 오류 남?', () => {
      user.phoneNumber = '01312345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('phoneNumber');
    });

    it('유저 전화번호 3자리 + 9자리 넣으면 오류 남?', () => {
      user.phoneNumber = '010123456789';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('phoneNumber');
    });

    it('유저 전화번호 3자리 + 8자리 넣으면 오류 안남?', () => {
      user.phoneNumber = '01012345678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(0);
    });

    it('유저 전화번호 3자리 + 7자리 넣으면 오류 안남?', () => {
      user.phoneNumber = '0101234567';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(0);
    });

    it('유저 전화번호 3자리 + 6자리 넣으면 오류 남?', () => {
      user.phoneNumber = '010123456';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('phoneNumber');
    });

    it('유저 전화번호 문자 넣으면 오류 남?', () => {
      user.phoneNumber = '010123x5678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('phoneNumber');
    });

    it('유저 전화번호 번호 사이에 "-" 넣으면 오류 남?', () => {
      user.phoneNumber = '010-1234-5678';

      const errors: ValidationError[] = validateSync(user);

      expect(errors.length).toBe(1);
      expect(errors[0].property).toBe('phoneNumber');
    });
  });
});

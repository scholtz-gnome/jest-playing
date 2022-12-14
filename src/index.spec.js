import { UsersRepository } from './index';

describe('UsersRepository', () => {
  describe('#create', () => {
    it('returns an object', () => {
      const usersRepository = new UsersRepository();

      const createUserDto = { name: 'Bob', age: 10, isEmailVerified: true };
      const user = usersRepository.create(createUserDto);

      expect(user).toMatchObject(createUserDto);
    });

    describe('When lastSignUp is present in dto', () => {
      it('returns dto', () => {
        const usersRepository = new UsersRepository();

        const createUserDto = {
          name: 'Bob',
          age: 10,
          isEmailVerified: true,
          lastSignedUp: new Date(),
        };
        const user = usersRepository.create(createUserDto);

        expect(user).toEqual(createUserDto);
      });
    });
  });
});

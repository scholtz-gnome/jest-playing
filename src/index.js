export class UsersRepository {
  create(createUserDto) {
    const createdAt = new Date();
    const updatedAt = new Date();

    return { ...createUserDto, createdAt, updatedAt };
  }
}

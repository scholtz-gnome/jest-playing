export class UsersRepository {
  create(createUserDto) {
    const createdAt = new Date();
    const updatedAt = new Date();

    if (createUserDto.lastSignedUp) {
      return createUserDto;
    }

    return { ...createUserDto, createdAt, updatedAt };
  }
}

export class TodosRepository {
  create(createTodoDto) {
    const createdAt = new Date();
    const updatedAt = new Date();

    return { ...createTodoDto, createdAt, updatedAt };
  }
}

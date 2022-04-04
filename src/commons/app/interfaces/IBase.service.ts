export interface IBaseService<T> {
  findAll(any): Promise<T[]>;
  findById(id: string): Promise<T>;
  update(id: string, object: T): Promise<T>;
  create(object: T): Promise<T>;
  delete(id: string): Promise<T>;
}

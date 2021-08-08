import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Document, FilterQuery, Model } from 'mongoose';
import { IBaseService } from './IBase.service';

@Injectable()
export abstract class BaseService<T extends Document>
  implements IBaseService<T>
{
  constructor(private readonly model: Model<T>) {}

  async create(object: T): Promise<T> {
    try {
      return this.model.create(object);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(conditions: FilterQuery<T> = {}): Promise<T[]> {
    try {
      return await this.model.find(conditions);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findById(id: string): Promise<T> {
    try {
      const item = await this.model.findById(id);
      if (!item) {
        throw new NotFoundException('Not found');
      }
      return item;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async delete(id: string): Promise<T> {
    try {
      const item = await this.model.findByIdAndRemove(id);
      if (!item) {
        throw new NotFoundException('Not found');
      }
      return item;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, object: T): Promise<T> {
    try {
      return await this.model.findByIdAndUpdate(id, <any>{ $set: object }, {
        new: true,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}

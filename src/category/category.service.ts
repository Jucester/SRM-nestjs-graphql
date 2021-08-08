import { Injectable } from '@nestjs/common';
import {
  Category,
  CategoryDocument,
  CreateCategoryInput,
} from './schema/category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async findMany(): Promise<Category[]> {
    return this.categoryModel.find();
  }

  async findById(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async createCategory(category: CreateCategoryInput): Promise<Category> {
    return this.categoryModel.create(category);
  }
}

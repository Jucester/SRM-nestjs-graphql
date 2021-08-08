import { Injectable } from '@nestjs/common';
import { Category, CategoryDocument, CreateCategoryInput } from './schema/category.schema';
import categories from '../data/Categories';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  async findMany() {
    return this.categoryModel.find();
  }

  async findById(id: string) {
    return this.categoryModel.findById(id);
  }

  async createCategory(category: CreateCategoryInput) {
    return this.categoryModel.create(category);
  }
}

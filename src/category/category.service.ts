import { Injectable } from '@nestjs/common';
import { CategoryDocument } from './schema/category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class CategoryService extends BaseService<CategoryDocument> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CompanyDocument } from './schema/company.schema';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class CompanyService extends BaseService<CompanyDocument> {
  constructor(
    @InjectModel('Company')
    private readonly companyModel: Model<CompanyDocument>,
  ) {
    super(companyModel);
  }

  async findByCategory(categoryId: string) {
    try {
      return this.companyModel.find({ category: categoryId });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }
}

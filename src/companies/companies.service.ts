import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICompany } from './schema/company.schema';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class CompaniesService extends BaseService<ICompany> {
  constructor(
    @InjectModel('Company')
    private readonly companyModel: Model<ICompany>,
  ) {
    super(companyModel);
  }

  // async findByCategory(categoryId: string) {
  //   try {
  //     return this.companyModel.find({ category: categoryId });
  //   } catch (error) {
  //     console.log(error);
  //     throw new InternalServerErrorException(error);
  //   }
  // }
}

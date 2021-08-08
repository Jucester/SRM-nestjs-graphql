import { Injectable } from '@nestjs/common';
// import companies from '../data/Companies';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import {
  Company,
  CreateCompanyInput,
  CompanyDocument,
} from './schema/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company')
    private readonly companyModel: Model<CompanyDocument>,
  ) {}

  async getCompanies(): Promise<Company[]> {
    return await this.companyModel.find();
  }

  async getCompany(companyId: string): Promise<Company> {
    return await this.companyModel.findById(companyId);
  }

  async createCompany(company: CreateCompanyInput): Promise<Company> {
    return await this.companyModel.create(company);
  }

  async updateCompany(companyId: string, company: Company): Promise<Company> {
    return await this.companyModel.findByIdAndUpdate(companyId, company, {
      new: true,
    });
  }

  async deleteCompany(companyId: string): Promise<Company> {
    return await this.companyModel.findByIdAndRemove(companyId);
  }

  // async findByCategory(categoryId: string) {
  // }
}

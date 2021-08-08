import { Injectable } from '@nestjs/common';
// import companies from '../data/Companies';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ICompany } from './interface/ICompany';
import {
  Company,
  CreateCompanyInput,
  CompanyDocument,
} from './schema/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company') private readonly companyModel: Model<CompanyDocument>,
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

  // companies: Partial<Company>[];

  // constructor() {
  //   this.companies = companies;
  // }

  // async findMany() {
  //   return this.companies;
  // }

  // async findById(id: string) {
  //   const companies = this.companies.filter((company) => company._id === id);
  //   if (companies.length > 0) {
  //     return companies[0];
  //   }
  //   return 'Does not exists';
  // }

  // async findByCategory(categoryId: string) {
  //   const companies = this.companies.filter(
  //     (company) => company.category === categoryId,
  //   );
  //   if (companies.length > 0) {
  //     return companies;
  //   }
  //   return [];
  // }

  // async createCompany(company: CreateCompanyInput) {
  //   this.companies = [company, ...this.companies];
  //   return company;
  // }
}

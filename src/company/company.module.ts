import { Module } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';
import { CompanySchema } from './schema/company.schema';
import { CategorySchema } from '../category/schema/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  providers: [CompanyResolver, CompanyService, CategoryService]
})
export class CompanyModule {}

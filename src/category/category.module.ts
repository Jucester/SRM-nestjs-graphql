import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from 'src/company/schema/company.schema';
import { CompanyService } from '../company/company.service';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { CategorySchema } from './schema/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema },
      { name: 'Category', schema: CategorySchema },
    ]),
  ],
  providers: [CategoryResolver, CategoryService, CompanyService],
})
export class CategoryModule {}

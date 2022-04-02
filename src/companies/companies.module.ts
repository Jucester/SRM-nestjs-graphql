import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesResolver } from './companies.resolver';
import { CompaniesService } from './companies.service';
import { Company, CompanySchema } from './schema/company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  providers: [CompaniesResolver, CompaniesService],
  exports: [CompaniesResolver, CompaniesService],
})
export class CompaniesModule {}

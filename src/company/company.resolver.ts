import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/schema/category.schema';
import { CompanyService } from './company.service';
import { Company, CreateCompanyInput, FindCompany } from './schema/company.schema';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private companyService: CompanyService,
    private categoryService: CategoryService,
  ) {}

  @Query(() => [Company])
  async companies() {
    return this.companyService.getCompanies();
  }

  @Query(() => Company)
  async company(@Args('input') { _id }: FindCompany) {
    return this.companyService.getCompany(_id);
  }

  @Mutation(() => Company)
  async createCompany(@Args('input') company: CreateCompanyInput) {
    return this.companyService.createCompany(company);
  }

  @Mutation(() => Company)
  async deleteCompany(@Args('input') { _id }: FindCompany) {
    return this.companyService.deleteCompany(_id);
  }

  @ResolveField(() => Category)
  async category(@Parent() company: Company) {
    return this.categoryService.findById(company.category as string);
  }
}

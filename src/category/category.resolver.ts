import {
  Parent,
  Query,
  ResolveField,
  Resolver,
  Args,
  Mutation,
} from '@nestjs/graphql';
import { CompanyService } from '../company/company.service';
import { CategoryService } from './category.service';
import { Category, CreateCategoryInput } from './schema/category.schema';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private categoryService: CategoryService,
    private companyService: CompanyService,
  ) {}

  @Query(() => [Category])
  async categories() {
    return this.categoryService.findMany();
  }

  @Mutation(() => Category)
  async createCategory(@Args('input') input: CreateCategoryInput) {
    return this.categoryService.createCategory(input);
  }
}

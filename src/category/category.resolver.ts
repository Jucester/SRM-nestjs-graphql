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
    return this.categoryService.findAll();
  }

  @Mutation(() => Category)
  async createCategory(@Args('input') input: CreateCategoryInput) {
    return this.categoryService.create(<any>input);
  }
}

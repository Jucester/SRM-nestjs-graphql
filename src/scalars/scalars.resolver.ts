import { Resolver, Query } from '@nestjs/graphql';
import { ScalarsService } from './scalars.service';
import { Scalar } from './schema/scalar.schema';

@Resolver(() => Scalar)
export class ScalarsResolver {
  constructor(private readonly scalarsService: ScalarsService) {}

  @Query(() => [Scalar])
  async scalars() {
    return this.scalarsService.findAll();
  }
}

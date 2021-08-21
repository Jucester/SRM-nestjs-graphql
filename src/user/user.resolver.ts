import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CreateUserInput, User } from './schema/user.schema';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async register(@Args('input') input: CreateUserInput) {
    return this.userService.createUser(<any>input);
  }
}

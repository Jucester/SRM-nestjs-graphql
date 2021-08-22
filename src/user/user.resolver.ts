import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ConfirmUserInput, CreateUserInput, User } from './schema/user.schema';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async register(@Args('input') input: CreateUserInput) {
    return this.userService.createUser(<any>input);
  }

  @Mutation(() => User)
  async confirmUser(@Args('input') input: ConfirmUserInput) {
    return this.userService.confirmUser(<any>input);
  }

}

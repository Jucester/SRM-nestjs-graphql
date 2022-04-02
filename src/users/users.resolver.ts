import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ConfirmUserInput, CreateUserInput, User } from './schema/user.schema';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async register(@Args('input') input: CreateUserInput) {
    return this.usersService.createUser(<any>input);
  }

  @Mutation(() => User)
  async confirmUser(@Args('input') input: ConfirmUserInput) {
    return this.usersService.confirmUser(<any>input);
  }

}

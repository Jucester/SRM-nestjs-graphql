import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { BaseService } from 'src/base/base.service';
import { CreateUserInput, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService extends BaseService<UserDocument> {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }

  async createUser(input: CreateUserInput) {
    const confirmToken = nanoid(32);
    return this.userModel.create({ ...input, confirmToken });
  }
}

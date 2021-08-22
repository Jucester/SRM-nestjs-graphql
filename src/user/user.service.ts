import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { BaseService } from 'src/base/base.service';
import {
  ConfirmUserInput,
  CreateUserInput,
  UserDocument,
} from './schema/user.schema';

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

  async confirmUser({ email, confirmToken }: ConfirmUserInput) {
    // Find the user

    const user = await this.userModel.findOne({ email });

    if (!user || confirmToken !== user.confirmToken) {
      throw new Error('Email or invalid confirm token');
    }

    user.active = true;
    await user.save();

    return user;
  }
}

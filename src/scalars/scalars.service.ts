import { Injectable } from '@nestjs/common';
import { Scalar } from '@nestjs/graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../commons/domain/services/base.service';
import { IScalar } from './schema/scalar.schema';

@Injectable()
export class ScalarsService extends BaseService<IScalar> {
  constructor(
    @InjectModel(Scalar.name)
    private readonly scalarModel: Model<IScalar>,
  ) {
    super(scalarModel);
  }
}

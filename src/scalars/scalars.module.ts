import { Module } from '@nestjs/common';
import { Scalar } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ScalarsResolver } from './scalars.resolver';
import { ScalarsService } from './scalars.service';
import { ScalarSchema } from './schema/scalar.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Scalar.name,
        schema: ScalarSchema,
      },
    ]),
  ],
  providers: [ScalarsResolver, ScalarsService],
  exports: [ScalarsResolver, ScalarsService],
})
export class ScalarsModule {}

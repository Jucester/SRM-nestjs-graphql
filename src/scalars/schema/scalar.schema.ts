import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IScalar = Scalar & Document;

@Schema({
  versionKey: false,
  timestamps: true,
})
@ObjectType()
export class Scalar {
  @Field(() => ID)
  _id: string;

  @Prop({
    required: true,
    unique: false,
    trim: true,
  })
  @Field()
  scalarType: string;

  @Prop({
    required: true,
    unique: false,
    trim: true,
  })
  @Field()
  value: string;
}

export const ScalarSchema = SchemaFactory.createForClass(Scalar);
ScalarSchema.index(
  {
    scalarType: 1,
    value: 1,
  },
  {
    unique: true,
  },
);

@InputType()
export class CreateScalarInput {
  @Field()
  scalarType: string;

  @Field()
  value: string;
}

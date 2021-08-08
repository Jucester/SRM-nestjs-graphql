import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Category } from '../../category/schema/category.schema';

const { ObjectId } = Types;

export type CompanyDocument = Company & Document;

@Schema()
@ObjectType()
export class Company {
  @Field()
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  description: string;

  @Prop({ required: true })
  @Field()
  email: string;

  @Prop({ required: true })
  @Field()
  phone: string;

  @Prop({ type: ObjectId, ref: 'Category' })
  @Field(() => Category)
  category: Category | string;
}

@InputType()
export class CreateCompanyInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  category: string;
}

@InputType()
export class FindCompany {
  @Field(() => ID)
  _id: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
CompanySchema.index({ category: 1 });

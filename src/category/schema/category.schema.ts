import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Company } from 'src/company/schema/company.schema';

const { ObjectId } = Types;

export type CategoryDocument = Category & Document;

@Schema()
@ObjectType()
export class Category {
  @Field(() => ID)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop({ type: ObjectId, ref: 'Company'})
  @Field(() => [Company])
  companies: Company[];
}

@InputType()
export class CreateCategoryInput {
  @Field()
  name: string;
}


export const CategorySchema = SchemaFactory.createForClass(Category);

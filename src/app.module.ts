import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { CompanySchema } from './company/schema/company.schema';
import { CategorySchema } from './category/schema/category.schema';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { UserService } from './user/user.service';
import { UserSchema } from './user/schema/user.schema';
dotenv.config();

@Module({
  imports: [
    CompanyModule,
    CategoryModule,
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),

    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema },
      { name: 'Category', schema: CategorySchema },
      { name: 'User', schema: UserSchema}
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, CompanyService, CategoryService, UserService],
})
export class AppModule {}

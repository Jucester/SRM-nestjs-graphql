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

@Module({
  imports: [
    CompanyModule,
    CategoryModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/companies-graphql', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),

    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema },
      { name: 'Category', schema: CategorySchema },
    ]),

  ],
  controllers: [AppController],
  providers: [AppService, CompanyService, CategoryService],
})
export class AppModule {}

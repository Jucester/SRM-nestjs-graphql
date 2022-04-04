import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './companies/schema/company.schema';
import { UsersModule } from './users/users.module';
import { UserSchema } from './users/schema/user.schema';
import { ScalarsModule } from './scalars/scalars.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    CompaniesModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: {
        endpoint: 'dev/graphql',
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([
      { name: 'Company', schema: CompanySchema },
      { name: 'User', schema: UserSchema },
    ]),

    ScalarsModule,
  ],
  // providers: [AppService, CompaniesService, UsersService],
})
export class AppModule {}

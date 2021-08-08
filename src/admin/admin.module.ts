import { Module } from "@nestjs/common";
// import { DatabaseModule } from "src/@database/database.module";
// import { databaseProviders } from "src/@database/postgres/moz/provider.database";
import { UserService } from "./controllers/user/user.service";
import { UserController } from "./controllers/user/user.controller";
import { ConfigModule } from "@nestjs/config";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DbTestModule, PgTestModels } from "src/@database/pg-test.database";
import { Photo } from "./controllers/user/users.model";

@Module({
  imports: [
    TypeOrmModule.forFeature(PgTestModels),

  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AdminModule {
  constructor(private readonly connection:Connection){}
}

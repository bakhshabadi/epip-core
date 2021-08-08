import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerGuard } from "@nestjs/throttler";

import { AppRate } from "./app.rate";
import { AppRouter } from "./app.router";
import { AdminModule } from "../admin/admin.module";
import { DbTestModule } from "src/@database/pg-test.database";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: (process.env.npm_lifecycle_event=='start:dev'?'env/dev.env': 'env/prod.env'),
    }),
    DbTestModule(),
    
    AppRate,
    AdminModule,
    AppRouter,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

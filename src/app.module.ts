import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AdminModule } from './admin/admin.module';
import { AdminRouter } from './admin/routers/admin.router';

@Module({
  imports: [
    AdminRouter,
    ThrottlerModule.forRoot({
      ttl: 1,
      limit: 5,
    }),
    AdminModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }    
  ],
})
export class AppModule {

}

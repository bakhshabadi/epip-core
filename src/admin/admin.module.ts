import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/@database/database.module";
import { UserController } from "./controllers/user.controller";
import { PhotoProviders } from "./models/photo.model";
import { UserService } from "./services/user.service";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService,...PhotoProviders],
})
export class AdminModule {}

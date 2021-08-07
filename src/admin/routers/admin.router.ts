import { RouterModule } from "@nestjs/core";
import { AdminModule } from "../admin.module";

export const AdminRouter = RouterModule.register([
  {
    path: "admin",
    module: AdminModule,
  },
]);

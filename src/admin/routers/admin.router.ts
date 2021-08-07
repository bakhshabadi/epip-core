import { RouterModule } from "@nestjs/core";
import { AdminModule } from "../admin.module";

// RouterModule.register([
//     {
//       path: 'admin',
//       module: AdminModule,
//     },
//   ])

@RouterModule()
export class AdminRouter{}
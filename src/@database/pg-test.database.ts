import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from 'src/admin/controllers/user/users.model';


export let PgTestModels:Array<any> = [Photo];

export const DbTestModule = ()=> {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // entities: [__dirname + '/../**/*.model.ts'],
    // entities: ["src/**/**.model{.ts,.js}"],
    entities: PgTestModels,
    synchronize: true,
  })
}
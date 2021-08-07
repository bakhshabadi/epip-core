import { Entity, Column, PrimaryGeneratedColumn, Connection } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("int")
  views: number;

  @Column()
  isPublished: boolean;
}

export const PhotoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Photo),
    inject: ['DATABASE_CONNECTION'],
  },
];
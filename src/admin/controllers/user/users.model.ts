// import { sealed } from "src/@app/app.module";
import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn, Connection } from "typeorm";


@Entity('photo')
export class Photo {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  @ApiProperty()
  name: string;

  @Column("text")
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  filename: string;

  @Column("int")
  @ApiProperty()
  views: number;

  @Column()
  @ApiProperty()
  isPublished: boolean;
}

export class IPaginatedPhoto{
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
  
  @ApiProperty({type:[Photo]})
  results: Photo[];
}
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number=0;

  @ApiProperty()
  @Column()
  insertedAt?: Date=new Date();

  @ApiProperty()
  @Column()
  updatedAt?: Date=new Date();

  @Column()
  deletedAt?: Date=new Date();
}
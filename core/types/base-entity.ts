import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number=0;

  @Column()
  insertedAt: Date=new Date();

  @Column()
  updatedAt: Date=new Date();

  @Column()
  deletetAt: Date=new Date();
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { nanoid } from 'nanoid';

@Entity()
export class Hospitel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string = nanoid();
}

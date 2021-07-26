import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { nanoid } from 'nanoid';

@Entity()
export class Hospitel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string = nanoid();

  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

  @Column()
  maxCapacity: number;

  @Column()
  currentCapacity: number;

  @Column({ nullable: true })
  hospital?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  website?: string;

  @Column({ nullable: true })
  googleMapsURL?: string;

  @Column('simple-array')
  tags: string[] = [];
}

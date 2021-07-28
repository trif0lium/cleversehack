import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { customAlphabet, urlAlphabet } from 'nanoid';

enum FacilityType {
  HOSPITEL = 'HOSPITEL',
  HOSPITAL = 'HOSPITAL',
}

enum Tag {
  G = 'G',
  Y = 'Y',
  R = 'R',
}

@Entity()
export class Hospitel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string = customAlphabet(urlAlphabet, 16)();

  @Column({ unique: true })
  name: string;

  @Column()
  address: string;

  @Column('double precision')
  latitude: number;

  @Column('double precision')
  longitude: number;

  @Column()
  maxCapacity: number;

  @Column()
  currentCapacity: number;

  @Column({ nullable: true })
  additionalDetail?: string;

  @Column({ nullable: true })
  hospital?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  website?: string;

  @Column({ nullable: true })
  googleMapsURL?: string;

  @Column('enum', { array: true, enum: Tag, default: [] })
  tags: Tag[] = [];

  @Column('enum', { enum: FacilityType })
  type: FacilityType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

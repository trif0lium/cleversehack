import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'rxjs';
import { Hospitel } from 'src/datamodel/hospitel.datamodel';
import { Repository } from 'typeorm';

@Injectable()
export class HospitelService {
  capacityUpdate$: Subject<{
    hospitelCode: string;
    currentCapacity: number;
    maxCapacity: number;
  }> = new Subject();

  constructor(
    @InjectRepository(Hospitel)
    private hospitelRepository: Repository<Hospitel>,
  ) {}

  findAll(): Promise<Hospitel[]> {
    return this.hospitelRepository.find({});
  }

  async increaseCurrentCapacity(hospitelCode: string, n: number) {
    const hospitel = await this.hospitelRepository.findOneOrFail({
      code: hospitelCode,
    });

    let maxCapacity = hospitel.maxCapacity;
    if (hospitel.currentCapacity + n > hospitel.maxCapacity) {
      maxCapacity = hospitel.currentCapacity + n;
    }

    await this.hospitelRepository.update(
      { id: hospitel.id },
      { currentCapacity: hospitel.currentCapacity + n, maxCapacity },
    );
  }
}

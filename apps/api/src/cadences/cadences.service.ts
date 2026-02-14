import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateCadenceDto } from './dto/create-cadence.dto';
import { UpdateCadenceDto } from './dto/update-cadence.dto';

type CadenceRecord = Omit<CreateCadenceDto, 'id'> & { id: string };

@Injectable()
export class CadencesService {
  private readonly email: CadenceRecord[] = [];

  create(emailCadence: CreateCadenceDto[]) {
    const created = emailCadence.map((cadence) => ({
      id: `cad_${randomUUID()}`,
      ...cadence,
      steps: cadence.steps.map((step) => ({
        ...step,
        id: `step_${randomUUID()}`,
      })),
    }));

    this.email.push(...created);
    return this.email;
  }

  findAll() {
    return this.email;
  }

  findOne(id: string) {
    return this.email.find((cadence) => cadence.id === id);
  }

  update(id: string, updateCadenceDto: UpdateCadenceDto) {
    const index = this.email.findIndex((cadence) => cadence.id === id);
    if (index === -1) {
      return null;
    }
    this.email[index] = { ...this.email[index], ...updateCadenceDto };
    return this.email[index];
  }

  remove(id: string) {
    return `This action removes a #${id} cadence`;
  }

  removeAll() {
    const removedCount = this.email.length;
    this.email.length = 0;
    return removedCount;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCadenceDto } from './dto/create-cadence.dto';
import { UpdateCadenceDto } from './dto/update-cadence.dto';

@Injectable()
export class CadencesService {
  private readonly email: any = [];

  create(emailCadence: CreateCadenceDto[]) {
    this.email.push(...emailCadence);
    return this.email;
  }

  findAll() {
    return this.email;
  }

  findOne(id: string) {
    console.log('id', id);
    return this.email.find((cadence: any) => cadence.id === id);
  }

  update(id: string, updateCadenceDto: UpdateCadenceDto) {
    const index = this.email.findIndex((cadence: any) => cadence.id === id);
    if (index === -1) {
      return null;
    }
    this.email[index] = { ...this.email[index], ...updateCadenceDto };
    return this.email[index];
  }

  remove(id: string) {
    return `This action removes a #${id} cadence`;
  }
}

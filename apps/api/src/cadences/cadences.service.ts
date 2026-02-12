import { Injectable } from '@nestjs/common';
import { CreateCadenceDto } from './dto/create-cadence.dto';
import { UpdateCadenceDto } from './dto/update-cadence.dto';

@Injectable()
export class CadencesService {
  private readonly email: any = [];

  create(emailCandence: CreateCadenceDto[]) {
    this.email.push(emailCandence);
    return this.email;
  }

  findAll() {
    return `This action returns all cadences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cadence`;
  }

  update(id: number, updateCadenceDto: UpdateCadenceDto) {
    return `This action updates a #${id} cadence`;
  }

  remove(id: number) {
    return `This action removes a #${id} cadence`;
  }
}
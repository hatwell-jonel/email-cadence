import { Injectable } from '@nestjs/common';
import { CreateCadenceDto } from './dto/create-cadence.dto';
import { UpdateCadenceDto } from './dto/update-cadence.dto';

@Injectable()
export class CadencesService {
  create(createCadenceDto: CreateCadenceDto) {
    return 'This action adds a new cadence';
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

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CadencesService } from './cadences.service';
import { CreateCadenceDto } from './dto/create-cadence.dto';
import { UpdateCadenceDto } from './dto/update-cadence.dto';

@Controller('cadences')
export class CadencesController {
  constructor(private readonly cadencesService: CadencesService) {}

  @Post()
  create(@Body() createCadenceDto: CreateCadenceDto[]) {
    return this.cadencesService.create(createCadenceDto);
  }

  @Get()
  findAll() {
    return this.cadencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadencesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCadenceDto: UpdateCadenceDto) {
    return this.cadencesService.update(id, updateCadenceDto);
  }

  @Delete()
  removeAll() {
    return this.cadencesService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadencesService.remove(id);
  }
}

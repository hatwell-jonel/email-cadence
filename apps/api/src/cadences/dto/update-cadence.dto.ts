import { PartialType } from '@nestjs/mapped-types';
import { CreateCadenceDto } from './create-cadence.dto';

export class UpdateCadenceDto extends PartialType(CreateCadenceDto) {}

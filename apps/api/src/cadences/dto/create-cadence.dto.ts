import {
    IsString,
    IsNotEmpty,
    ValidateNested,
    IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCadenceStepDto  } from './step-cadence.dto';

export class CreateCadenceDto {
    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCadenceStepDto)
    steps!: CreateCadenceStepDto[];
}

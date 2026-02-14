import {
  IsEnum,
  IsOptional,
  IsString,
  IsNumber,
  ValidateIf,
  IsNotEmpty,
} from 'class-validator';
import { CadenceStepType } from '../cadence-step-type.enum';

export class CreateCadenceStepDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsEnum(CadenceStepType)
  type!: CadenceStepType;

  @ValidateIf((o) => o.type === CadenceStepType.SEND_EMAIL)
  @IsString()
  @IsNotEmpty()
  subject?: string;

  @ValidateIf((o) => o.type === CadenceStepType.SEND_EMAIL)
  @IsString()
  @IsNotEmpty()
  body?: string;

  @ValidateIf((o) => o.type === CadenceStepType.WAIT)
  @IsNumber()
  seconds?: number;
}

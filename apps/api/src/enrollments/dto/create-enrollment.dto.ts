import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsNotEmpty()
  @IsString()
  cadenceId!: string;

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  contactEmails!: string[];
}

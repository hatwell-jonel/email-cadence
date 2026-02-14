import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { randomUUID } from 'crypto';
import { CadencesService } from '../cadences/cadences.service';
type EnrollmentRecord = CreateEnrollmentDto & { id: string };

@Injectable()
export class EnrollmentsService {
  private readonly enrollments: EnrollmentRecord[] = [];

  constructor(private readonly cadencesService: CadencesService) {}

  create(createEnrollmentDto: CreateEnrollmentDto) {
    try {
      const cadence = this.cadencesService.findOne(
        createEnrollmentDto.cadenceId
      );
      if (!cadence) {
        return 'Cadence not found';
      }

      const enrollment = {
        id: `enrollment_${randomUUID()}`,
        cadenceId: createEnrollmentDto.cadenceId,
        contactEmails: createEnrollmentDto.contactEmails,
      };

      this.enrollments.push(enrollment);
      return this.enrollments;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  findAll() {
    return this.enrollments;
  }

  findOne(id: string) {
    return this.enrollments.find((enrollment) => enrollment.id === id);
  }

  update(id: string, updateEnrollmentDto: UpdateEnrollmentDto) {
    const index = this.enrollments.findIndex((enrollment) => enrollment.id === id);
    if (index === -1) {
      return null;
    }
    this.enrollments[index] = { ...this.enrollments[index], ...UpdateEnrollmentDto };
    return this.enrollments[index];
  }

  remove(id: string) {
    return `This action removes a #${id} enrollment`;
  }
}

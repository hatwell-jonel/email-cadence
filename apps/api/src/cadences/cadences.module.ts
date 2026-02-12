import { Module } from '@nestjs/common';
import { CadencesService } from './cadences.service';
import { CadencesController } from './cadences.controller';

@Module({
  controllers: [CadencesController],
  providers: [CadencesService],
})
export class CadencesModule {}

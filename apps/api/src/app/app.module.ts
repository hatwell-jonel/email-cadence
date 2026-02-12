import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadencesModule } from '../cadences/cadences.module';

@Module({
  imports: [CadencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

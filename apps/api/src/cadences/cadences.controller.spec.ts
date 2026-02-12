import { Test, TestingModule } from '@nestjs/testing';
import { CadencesController } from './cadences.controller';
import { CadencesService } from './cadences.service';

describe('CadencesController', () => {
  let controller: CadencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadencesController],
      providers: [CadencesService],
    }).compile();

    controller = module.get<CadencesController>(CadencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

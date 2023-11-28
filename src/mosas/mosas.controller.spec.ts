import { Test, TestingModule } from '@nestjs/testing';
import { MosasController } from './mosas.controller';

describe('MosasController', () => {
  let controller: MosasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MosasController],
    }).compile();

    controller = module.get<MosasController>(MosasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

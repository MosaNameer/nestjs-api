import { Test, TestingModule } from '@nestjs/testing';
import { MosasService } from './mosas.service';

describe('MosasService', () => {
  let service: MosasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MosasService],
    }).compile();

    service = module.get<MosasService>(MosasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

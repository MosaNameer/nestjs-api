import { Module } from '@nestjs/common';
import { MosasController } from './mosas.controller';
import { MosasService } from './mosas.service';

@Module({
  controllers: [MosasController],
  providers: [MosasService]
})
export class MosasModule {}

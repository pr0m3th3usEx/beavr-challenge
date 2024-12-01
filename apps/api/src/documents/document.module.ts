import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { IDocumentRepository } from './contracts/document.repo';
import { InMemoryDocumentRepository } from './adapters/repositories/document-in-memory.repo';

@Module({
  imports: [],
  providers: [
    DocumentService,
    {
      provide: IDocumentRepository,
      useClass: InMemoryDocumentRepository,
    },
  ],
  controllers: [DocumentController],
})
export class DocumentModule {}

import { Inject, Injectable } from '@nestjs/common';
import { IDocumentRepository } from './contracts/document.repo';
import { DocumentType, DocumentWithDocumentType } from '@beavr/types';

@Injectable()
export class DocumentService {
  constructor(
    @Inject(IDocumentRepository)
    private readonly documentRepository: IDocumentRepository,
  ) {}

  async create(): Promise<void> {
    throw new Error('Not implemented');
  }

  async delete(): Promise<void> {
    throw new Error('Not implemented');
  }

  async update(_id: string): Promise<void> {
    return;
  }

  async get(_id: string): Promise<DocumentWithDocumentType> {
    throw new Error('Not implemented');
  }

  async getAll(): Promise<DocumentWithDocumentType[]> {
    throw new Error('Not implemented');
  }

  async getDocumentTypes(): Promise<DocumentType[]> {
    throw new Error('Not implemented');
  }
}

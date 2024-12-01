import { Document, DocumentWithDocumentType } from '@beavr/types';
import { Injectable } from '@nestjs/common';
import { IDocumentRepository } from 'src/documents/contracts/document.repo';

@Injectable()
export class InMemoryDocumentRepository implements IDocumentRepository {
  private documents: DocumentWithDocumentType[];

  async create(): Promise<Document> {
    throw new Error('Method not implemented.');
  }

  async update(_id: string): Promise<Document> {
    throw new Error('Method not implemented.');
  }

  async get(_id: string): Promise<DocumentWithDocumentType> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<DocumentWithDocumentType[]> {
    return this.documents;
  }

  async delete(_id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

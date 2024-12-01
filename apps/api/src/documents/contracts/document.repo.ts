import { Document, DocumentWithDocumentType } from '@beavr/types';

export interface IDocumentRepository {
  create(): Promise<Document>;
  update(id: string): Promise<Document>;
  get(id: string): Promise<DocumentWithDocumentType>;
  getAll(): Promise<DocumentWithDocumentType[]>;
  delete(id: string): Promise<void>;
}

export const IDocumentRepository = Symbol('IDocumentRepository');

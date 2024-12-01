import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get()
  async getAll(): Promise<unknown[]> {
    return this.documentService.getAll();
  }

  @Get('types')
  async getDocumentTypes(): Promise<unknown[]> {
    return this.documentService.getDocumentTypes();
  }

  @Post()
  async create(): Promise<void> {
    return this.documentService.create();
  }

  @Put(':id')
  async update(): Promise<void> {
    // return this.documentService.update();
  }

  @Delete(':id')
  async delete(): Promise<void> {
    // return this.documentService.delete();
  }
}

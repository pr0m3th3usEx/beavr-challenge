import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DocumentService } from './document.service';

@Controller('documents')
export class DocumentController {
  constructor(private readonly requirementService: DocumentService) {}

  @Get()
  async getAll(): Promise<unknown[]> {
    return [];
  }

  @Get('types')
  async getDocumentTypes(): Promise<unknown[]> {
    return [];
  }

  @Post(':id')
  async create(): Promise<void> {
    return;
  }

  @Put(':id')
  async update(): Promise<void> {
    return;
  }

  @Delete(':id')
  async delete(): Promise<void> {
    return;
  }
}

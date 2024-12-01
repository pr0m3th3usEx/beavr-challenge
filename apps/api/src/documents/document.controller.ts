import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DocumentService } from './document.service';
import {
  CreateDocumentResponse,
  DocumentType,
  DocumentWithDocumentType,
} from '@beavr/types';
import {
  CreateDocumentDto,
  GetDocumentParams,
  UpdateDocumentDto,
} from 'src/dto';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Get()
  async getAll(): Promise<DocumentWithDocumentType[]> {
    return this.documentService.getAll();
  }

  @Get('types')
  async getDocumentTypes(): Promise<DocumentType[]> {
    return this.documentService.getDocumentTypes();
  }

  @Post()
  async create(
    @Body() body: CreateDocumentDto,
  ): Promise<CreateDocumentResponse> {
    return this.documentService.create(body);
  }

  @Put(':id')
  async update(
    @Param() { id }: GetDocumentParams,
    @Body() body: UpdateDocumentDto,
  ): Promise<void> {
    return this.documentService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param() { id }: GetDocumentParams): Promise<void> {
    return this.documentService.delete(id);
  }
}

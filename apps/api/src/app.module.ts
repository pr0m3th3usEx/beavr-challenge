import { Module } from '@nestjs/common';
import { RequirementModule } from './requirements/requirement.module';
import { DocumentModule } from './documents/document.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, RequirementModule, DocumentModule],
})
export class AppModule {}

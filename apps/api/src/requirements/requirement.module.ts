import { Module } from '@nestjs/common';
import { RequirementController } from './requirement.controller';
import { RequirementService } from './requirement.service';
import { IRequirementRepository } from './contracts/requirement.repo';
import { InMemoryRequirementRepository } from './adapters/repositories/requirement-in-memory.repo';

@Module({
  imports: [],
  providers: [
    RequirementService,
    {
      provide: IRequirementRepository,
      useClass: InMemoryRequirementRepository,
    },
  ],
  controllers: [RequirementController],
})
export class RequirementModule {}

import { Module } from '@nestjs/common';
import { RequirementController } from './requirement.controller';
import { RequirementService } from './requirement.service';

@Module({
  imports: [],
  providers: [RequirementService],
  controllers: [RequirementController],
})
export class RequirementModule {}

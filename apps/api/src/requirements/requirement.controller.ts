import { Controller, Get } from '@nestjs/common';
import { RequirementService } from './requirement.service';
import { RequirementWithRequiredDocuments } from '@beavr/types';

@Controller('requirements')
export class RequirementController {
  constructor(private readonly requirementService: RequirementService) {}

  @Get()
  async getAll(): Promise<RequirementWithRequiredDocuments[]> {
    return this.requirementService.getAll();
  }
}

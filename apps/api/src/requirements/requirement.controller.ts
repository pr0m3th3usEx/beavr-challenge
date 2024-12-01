import { Controller, Get } from '@nestjs/common';
import { RequirementService } from './requirement.service';

@Controller('requirements')
export class RequirementController {
  constructor(private readonly requirementService: RequirementService) {}

  @Get()
  async getAll(): Promise<unknown[]> {
    return [];
  }
}

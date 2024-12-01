import { Inject, Injectable } from '@nestjs/common';
import { IRequirementRepository } from './contracts/requirement.repo';
import { RequirementWithRequiredDocuments } from '@beavr/types';

@Injectable()
export class RequirementService {
  constructor(
    @Inject(IRequirementRepository)
    private readonly requirementRepository: IRequirementRepository,
  ) {}

  async getAll(): Promise<RequirementWithRequiredDocuments[]> {
    return this.requirementRepository.getRequirements();
  }
}

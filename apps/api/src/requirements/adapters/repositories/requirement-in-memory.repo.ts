import { RequirementWithRequiredDocuments } from '@beavr/types';
import { IRequirementRepository } from 'src/requirements/contracts/requirement.repo';

export class InMemoryRequirementRepository implements IRequirementRepository {
  private requirements: RequirementWithRequiredDocuments[];

  async getRequirements(): Promise<RequirementWithRequiredDocuments[]> {
    return this.requirements;
  }
}

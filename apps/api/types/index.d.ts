declare module '@beavr/types' {
  interface Requirement {
    id: string;
    name: string;
    description: string;
  }

  interface RequirementWithRequiredDocuments extends Requirement  {
    requiredDocuments: DocumentType[];
  }

  interface DocumentType {
    docType: string;
  }

  type DocumentStatus = 'IN_PROGRESS' | 'VALID' | 'REFUSED' | 'EXPIRED';

  interface Document {
    id: string;
    docType: DocumentType;
    version: Date;
    status: DocumentStatus;
    expirationDate: Date;
  }
}

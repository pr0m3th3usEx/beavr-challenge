declare module '@beavr/types' {
  interface Requirement {
    id: string;
    name: string;
    description: string;
  }

  interface RequirementWithRequiredDocuments extends Requirement {
    requiredDocuments: DocumentType[];
  }

  type RequirementStatus = 'NOT_COMPLIANT' | 'COMPLIANT';

  interface RequirementWithStatus extends Requirement {
    status: RequirementStatus;
  }

  interface DocumentType {
    docType: string;
  }

  type DocumentStatus = 'IN_PROGRESS' | 'VALID' | 'REFUSED' | 'EXPIRED';

  interface Document {
    id: string;
    version: Date;
    status: DocumentStatus;
    expirationDate: Date;
  }

  interface DocumentWithDocumentType extends Document {
    docType: DocumentType;
  }

  type CreateDocumentResponse = Pick<Document, 'id'>;
}

# pnpm-ts-monorepo-boilerplate

A simple boilerplate for your typescript monorepo projects using pnpm


1 - Setup NestJS App & Build
2 - Prepare Database Schemas with Prisma
3 - Implement repositories & controllers
4 - React App

Database tables:

Requirements table:

- id
- name
- description
- Required Documents List
- Documents[]


Documents table:
- id
- type
- version (Date)
- status (IN_PROGRESS, ACCEPTED, REFUSED, EXPIRED)
- expiration_date



// Entities

Requirement

id / name / description / status / documents (optional)

Document

id / type / version / status / expiration date

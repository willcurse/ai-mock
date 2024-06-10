import { type InferModel } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { pgTable, uuid, text, date, integer } from 'drizzle-orm/pg-core';

// Define the schema
export const mySchemaUsers = pgTable('users', {
  Mockid: uuid().primaryKey().default(uuidv4()), // Define Mockid as UUID
  jsonMockResp: text(), // JSON response
  jobposition: text(), // Job position
  jobdesc: text(), // Job description
  jobexp: integer(), // Job experience in years
  createdBY: text(), // Creator's email address
  createdAT: date(), // Creation date
});

// Infer model from the schema
export type User = InferModel <typeof mySchemaUsers>;

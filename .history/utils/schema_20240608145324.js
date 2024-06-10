import { serial, text, pgTable, varchar,integer } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from 'uuid';

export const mySchemaUsers = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  jsonMockResp: text('jsonMockResp').notNull(),
  jobposition: varchar('jobposition').notNull(),
  jobdesc: varchar('jobdesc').notNull(),
  jobexp: varchar('jobexp').notNull(),
  createdBY: varchar('createdBY').notNull(),
  createdAT: varchar('createdAT').notNull(),
  Mockid: integer('Mockid').default(uuidv4()), // Use varchar for storing UUIDs as strings
});

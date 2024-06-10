import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";
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
  Mockid: uuid().default(uuidv4()),
});

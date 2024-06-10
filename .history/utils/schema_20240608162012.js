// import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";

// export const mySchemaUsers = pgTable('users', {
//   id: serial('id').primaryKey(),
//   jsonMockResp: text('jsonMockResp').notNull(),
//   jobposition: varchar('jobposition').notNull(),
//   jobdesc: varchar('jobdesc').notNull(),
//   jobexp: serial('jobexp').notNull(),
//   createdBY: varchar('createdBY').notNull(),
//   createdAT: varchar('createdAT').notNull(),
//   Mockid: varchar('Mockid').notNull()
// });

import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from 'uuid';

export const mySchemaUsers = pgTable('users', {
  id: serial('id').primaryKey(),
  jsonMockResp: text('jsonMockResp').notNull(),
  jobposition: varchar('jobposition').notNull(),
  jobdesc: varchar('jobdesc').notNull(),
  jobexp: varchar('jobexp').notNull(),
  createdBY: varchar('createdBY').notNull(),
  createdAT: varchar('createdAT').notNull(),
  Mockid: varchar('Mockid').default(uuidv4()), // Use varchar for storing UUIDs as strings
});


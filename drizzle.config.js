import type { Config } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.js",
  dbCredentials:{
    url:"postgresql://ai-mock_owner:zU5H8tVPfcaI@ep-odd-sky-a5qk16h4.us-east-2.aws.neon.tech/ai-mock?sslmode=require",
  }
}
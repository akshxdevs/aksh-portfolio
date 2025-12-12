import { Pool } from 'pg';

const connectionString =
  process.env.POSTGRES_VISITOR_URL ||
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_U8HY1ZkEfbaV@ep-small-glitter-ad05zluz-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

if (!connectionString) {
  throw new Error('Missing Postgres connection string for visitor tracking');
}

declare global {
  // eslint-disable-next-line no-var
  var pgVisitorPool: Pool | undefined;
}

const pool =
  globalThis.pgVisitorPool ||
  new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 5,
  });

if (!globalThis.pgVisitorPool) {
  globalThis.pgVisitorPool = pool;
}

export default pool;


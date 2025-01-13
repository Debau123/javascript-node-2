import { db } from '@vercel/postgres';


const client = await db.connect();

export  async function GET(){

    await client.sql`BEGIN`

    await client.sql`CREATE TABLE a6_users (name text)`
    await client.sql`INSERT INTO a6_users (name) VALUES ('gerard') , ('inaki') ,('andreu') `
    await client.sql`COMMIT`

    return Response.json({message: 'SEED OK'});
}
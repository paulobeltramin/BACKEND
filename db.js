import "dotenv/config"
import Postgres from "postgres";



const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL= `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

 export const sql = Postgres(URL, { ssl: 'require' })

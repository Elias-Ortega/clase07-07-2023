// las consultas del usuario  a la base son dinamicas
// 
import pkg from 'pg';
const { Pool }  = pkg;

//documentacion https://node-postgres.com/features/connecting
const connectionString = 'postgresql://postgres:admin@localhost:5432/casoEstudiantes';

const pool = new Pool({ 
    connectionString
  });

await pool.connect();
 
const text = 'SELECT * FROM curso where codigo_plan_formativo = $1';
const values = ['A2']

const res = await pool.query(text, values);
console.log(res.rows); 
await pool.end();

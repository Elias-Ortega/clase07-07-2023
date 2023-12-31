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

/* UPDATE curso 
SET fecha_termno = '05-01-2024'
where codigo_curso = '0071'; */
 
const text = "UPDATE curso SET fecha_termno = $1 WHERE codigo_curso = $2 RETURNING *";
const values = ['08-07-2024','0071'];

const res = await pool.query(text, values);
console.log(res.rows); 
await pool.end();
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

/*DELETE
FROM curso
WHERE codigo_curso = '0071'; */
 
const text = "DELETE FROM curso WHERE codigo_curso = $1 RETURNING *";
const values = ['0074'];

const res = await pool.query(text, values);
console.log(res.rows); 
await pool.end();
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
 
const text = 'INSERT INTO curso(codigo_curso, fecha_inicio, fecha_termno, codigo_comuna, codigo_plan_formativo) VALUES($1, $2, $3, $4, $5) RETURNING *';
const values = ['0074', '08-07-2023', '08-12-2023', 303, 'A5'];

const res = await pool.query(text,values);
console.log(res.rows); 
await pool.end();
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
where codigo_curso = '0070' */
 
const text = "UPDATE curso SET fecha_termno = '05-01-2024'where codigo_curso = '0070'";
const values = ['0073','08-07-2023', '08-12-2023', 303, 'A5'];

const res = await pool.query(text,values);
console.log(res.rows); 
await pool.end();
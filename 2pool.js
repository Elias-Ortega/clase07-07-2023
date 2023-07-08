import pkg from 'pg';
const { Pool }  = pkg;

//para conectarse programatico en https://node-postgres.com/features/connecting
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'casoEstudiantes',
    password: 'admin',
    port: 5432,
  });

await pool.connect();
 
const res = await pool.query('SELECT * FROM curso');
console.log(res.rows); 
await pool.end();

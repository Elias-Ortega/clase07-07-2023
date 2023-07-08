import pkg from 'pg';
const { Client }  = pkg;

//para conectarse programatico en https://node-postgres.com/features/connecting
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'casoEstudiantes',
    password: 'admin',
    port: 5432,
  });

await client.connect();
 
const res = await client.query('SELECT * FROM curso');
console.log(res.rows); 
await client.end();




//host
//puerto
//usuario
//contraseña
//database
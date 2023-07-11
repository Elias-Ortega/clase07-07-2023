// Objeto de configuracion de consulta
// 
import pkg from 'pg';
const { Pool }  = pkg;

//documentacion https://node-postgres.com/features/connecting
const connectionString = 'postgresql://postgres:admin@localhost:5432/casoEstudiantes';

const pool = new Pool({ 
    connectionString
  });

await pool.connect();


const query = {
    // give the query a unique name
    name: 'fetch-cursos',//este nombre lo pone uno//se guarda en la cache
    text: 'SELECT * FROM curso where codigo_plan_formativo = $1',
    values: ['A2'],
    rowMode: 'array'
  }
 
const res = await pool.query(query);
console.log(res.rows); 
await pool.end();
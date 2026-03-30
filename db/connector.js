import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

//Add table creation
const createTableQueries = [];

createTableQueries.push(`
    CREATE TABLE IF NOT EXISTS heroes1 (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,              
    primary_attribute TEXT,        
    role TEXT,       
    attack_type TEXT,           
    difficulty INTEGER,                
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
   `);
createTableQueries.push(`
 CREATE TABLE IF NOT EXISTS sloniki1 (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    age TEXT NOT NULL,
    place_of_birth TEXT NOT NULL,           
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
      `);

for (let i = 0; i < createTableQueries.length; i++) {
    console.log(`create string`)
    pool.query(createTableQueries[i]);
}

      
// const initializeDatabase = async () => {
//    console.log('-----------------------------------------------');
//    console.log('Initializing sloniki database...');


//    try {
//       await 
//    } catch (error) {
//       console.error('!! Error initializing database');
//       // console.error('Full error:', error);
//       throw error;
//    }
// };

console.log("CONNECTED!!!!!✅ ")

export default pool;
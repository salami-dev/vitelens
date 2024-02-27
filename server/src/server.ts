
import 'dotenv/config'
import { AppDataSource } from "./connectDB"
import app from './app';

const PORT =8000;

async function startServer (): Promise<void> {

  try {
    await AppDataSource.connect();
    app.listen(PORT, () => { console.log(`running on port : ${PORT}`); });

    console.log('Connected to the database succefully!');

    console.log("Yipee piyee yee! Yaa ypoooo!!!!!")
  } catch (err) {

    if (err.code === '3D000') { // Postgres error code for database not existing
      await AppDataSource.query('CREATE DATABASE IF NOT EXISTS vitelens-dev-db');
      await AppDataSource.initialize(); 
      console.log("Database created and connected");
    } else {
      console.error("Error connecting to database:", err); 
    }
    // console.error('Error connecting to the database: ', err);
  }

  
}

startServer();

process.on('bad auth', (err: unknown) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');

  if (err instanceof Error) {
    console.log(err.name, err.message);
  }
});

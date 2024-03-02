import 'dotenv/config';
// import { createConnection, createConnections } from 'typeorm';
import { AppDataSource } from "./connectDB"
import app from './app';

const PORT =8000;

// createConnection

async function startServer(){
  try {
    await AppDataSource.initialize();
    console.log("Data Source initialized successfully");
    app.listen(PORT, () => { console.log(`running on port : ${PORT}`); });        
  } catch (err) {
    console.error("Error during Data Source initialization:", err);        
  }
}
startServer();


process.on('bad auth', (err: unknown) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');

  if (err instanceof Error) {
    console.log(err.name, err.message);
  }
});

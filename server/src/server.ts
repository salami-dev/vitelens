
import 'dotenv/config'
import app from './app';

const PORT =8000;

async function startServer (): Promise<void> {
  app.listen(PORT, () => { console.log(`running on port : ${PORT}`); });
}

startServer();

process.on('bad auth', (err: unknown) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');

  if (err instanceof Error) {
    console.log(err.name, err.message);
  }
});

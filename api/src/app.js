import express from 'express';
import cors from 'cors';
import routerApi from './routes/index.js';

const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  routerApi(app);
  return app;
};

export default createApp;

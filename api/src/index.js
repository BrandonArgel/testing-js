import { config } from './config/index.js';
import createApp from './app.js';

const app = createApp();

app.listen(config.port, (err) => {
  if (err) {
    console.error('Error: ', err);
  }
});

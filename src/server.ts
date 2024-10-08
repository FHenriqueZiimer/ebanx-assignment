import express from 'express';
import router from './routes/index';

const app = express();
app.use(express.json());

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

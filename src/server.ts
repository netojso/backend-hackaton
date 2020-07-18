import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Banco carregado');
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(cors());

app.listen(3333, () => {
  console.log('Server running on Port 3333');
});

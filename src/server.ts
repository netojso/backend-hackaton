/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const url = process.env.MONGO_URL;
const mongoUrl = `${url}`;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Banco carregado');
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.APP_URL || 3333);

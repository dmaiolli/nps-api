import 'reflect-metadata';
import express from 'express';
// por padrão quando temos o index na pasta, não precisamos chamá-lo diretamente, pois ele buscará por algum arquivo chamado index
import createConnection from './database'
import { router } from './routes';

createConnection()
const app = express();

app.use(express.json());
app.use(router)

export { app }
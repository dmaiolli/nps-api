import 'reflect-metadata';
import express from 'express';
// por padrão quando temos o index na pasta, não precisamos chamá-lo diretamente, pois ele buscará por algum arquivo chamado index
import './database'
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router)

app.listen(3333, () => console.log("Backend started🚀"));
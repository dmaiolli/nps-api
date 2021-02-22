import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'hello world' });
})

app.post('/', (request, response) => {
  return response.json({ message: 'Os dados foram salvos com sucesso' });
})

app.listen(3333, () => console.log("Backend started🚀"));
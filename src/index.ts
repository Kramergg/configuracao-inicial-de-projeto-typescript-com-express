import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

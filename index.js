const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API INO-Predict ativa com sucesso!');
});

// Rota de previsão simulada (mock)
app.post('/predict', (req, res) => {
  const { saldo } = req.body;
  
  const resultado = Math.random() > 0.5 ? 'voa até 10x' : 'cai antes de 2x';
  res.json({
    saldoInformado: saldo,
    previsao: resultado,
    confiabilidade: Math.floor(Math.random() * 30 + 70) + '%'
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

const express = require('express');
const app = express();
const predictRoute = require('./routes/predict');

app.use(express.json());
app.use(express.static('public'));

app.use('/api/predict', predictRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

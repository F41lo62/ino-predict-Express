const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ sucesso: true, previsao: "2.30x", momento: "Alto risco" });
});

module.exports = router;

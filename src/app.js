const express = require('express');
const app = express();

app.get('/health', (req,res) => {
  res.send('OK');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

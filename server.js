'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, This is CI/CD pipeline setup to push codes to Beanstalk whenever main branch gets updated');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
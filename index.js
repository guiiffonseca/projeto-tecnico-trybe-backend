const app = require('./server')
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Ouvindo na porta: ${port}`));
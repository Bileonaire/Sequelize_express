const express    = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models').sequelize; // import Sequelize
const app = express();

app.use(bodyParser.json());

const port = 3000;

// sequelize.sync().then(() => {
//   app.listen(port, () => {
//     console.log(`Running on http://localhost:${port}`)
//     });
// });

app.listen(port, () => {
console.log(`Running on http://localhost:${port}`)
});
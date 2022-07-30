const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const infoCards = require("./Data/infoCards");

app.use(cors());

app.all('/', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    next();
})

const router = express.Router();
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

router.get(
    '/CardsInfo',
    async function (req, res) {
        res.status(200).json(infoCards);
    });
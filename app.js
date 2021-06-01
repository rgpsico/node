const express = require('express');

//rotas
const router = express.Router();
router.get('/', (req, res)=>{
    res.send('ola mundoaaaa');
});

const app = express();

app.use('/', router);

module.exports = app;
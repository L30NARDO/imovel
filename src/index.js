const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./controllers/imovelController')(app);


app.listen(3000, () => console.log("||======> MODULE IMMOBILE STARTED <======||"));
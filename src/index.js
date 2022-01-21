const express = require('express');
const connectDB = require('./database/configDB')
const bodyParser = require('body-parser');

const app = express();

connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req, res) => {
    return res.json({ message: "Module immobile running" });
  });
require('./controllers/imovelController')(app);


app.listen(3001, () => console.log("\n||======> MODULE IMMOBILE STARTED <======||"));
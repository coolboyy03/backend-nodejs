const express = require('express');
const path = require('path');
const app = express();
const configViewEngine = require('./config/viewEngine');
const initWebRoutes = require('./routes/web');
const port = 3000;

//cionfig tamplate engine
configViewEngine(app);
//khai bao rounting
app.use('/',initWebRoutes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));


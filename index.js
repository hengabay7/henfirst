const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const actionsRoute=require('./actions');
app.use('/api',actionsRoute);

const port=5000;
app.listen(port,function(){
    console.log(`server is working via port ${port}`);
});


const express = require('express');

const app = express();

const port = process.env.PORT||3000;

const authroutes=require('./routes/authroutes');
const errorController = require('./controllers/error');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Accept, X-Custom-Header');
    
    next(); 
  });

app.use('/',authroutes);
app.use('/post',authroutes);
app.use('/delete/:id',authroutes);
app.use('/update/:id',authroutes);
app.use(errorController.get404);

app.use(errorController.get500);
app.listen(port, () => console.log(`Listening on port ${port}`));

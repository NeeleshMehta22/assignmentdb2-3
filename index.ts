const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database')
const cors = require('cors');
const app = express()
const port = 3000



// var corsOptios = {
//   origin: 'http://localhost:4200',
//   optionsSuccessStatus:200
// }

// app.use(cors(corsOptios));

app.use(logger);

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


  app.use(express.urlencoded());
  
  app.use(express.json());
  
  app.use(express.static("USER"));
  
  app.get('/',(req,res)=>{
      
      
      res.sendFile(__dirname + "/UI/index.html");
    
      
  })
  

  app.get('/users/get',db.getUsers);

  app.get('/users/:id',db.getUserById);

  app.post('/users/', db.createUser);

  app.delete('/users/:id', db.deleteUser);

  app.put('/users/:id', db.updateUser);


  app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);

})


  function logger(req,res,next){
    console.log(req.method);
    console.log(req.url);
    next();
  }
  
  


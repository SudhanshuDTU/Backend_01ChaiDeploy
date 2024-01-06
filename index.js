require('dotenv').config();
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
      res.send("This text is from server side");
});
app.get('/twitter',(req,res)=>{
     res.json({route : '/twitter',text : 'this is second page'});
})

app.listen(process.env.PORT,()=>{
  console.log(`server started successfully at port ${process.env.PORT}`);
});

let a = 4;
console.log(a);
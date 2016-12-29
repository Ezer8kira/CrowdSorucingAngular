var express = require('express');
var app = express();


app.use(express.static('./app'));

app.get('/',function(req,res){
   res.render('index'); 
});

app.listen(8000);

console.log('App is running on port 8000');
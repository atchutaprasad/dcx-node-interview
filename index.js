/**
 * Module dependencies.
 */

 var express = require('./expressLib');
 //var hash = require('pbkdf2-password')()
 var path = require('path');
 //var session = require('express-session');
 var cors = require('cors');
 //var bodyParse = require('body-parser')


 var app = module.exports = express();
 
 // config
 
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));
 
// Allow all
app.use(cors());


// parse application/json
//app.use(bodyParse.json())


app.post('/parse', function (req, res) {
  var from = req.body.from;
  var text = req.body.text;
  var subject = req.body.subject;
  var num_attachments = req.body.attachments;
  for (i = 1; i <= num_attachments; i++){
    var attachment = req.files['attachment' + i];
    // attachment will be a File object
  }
});

app.get('/testapi', function(req, res){
    res.send('200 response - working fine');
});


  var host = '0.0.0.0';
  var server = app.listen(process.env.PORT|| 8080,host, function(){
      var port = server.address().port;
      console.log('server is running ON port',port);
  })
   console.log('Express started on port 3001');
 

 
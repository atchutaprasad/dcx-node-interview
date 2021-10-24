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

const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: 'CjZWpgiO7sAceU9ZWc3xk2m0ao4upx5bwkrgA0KE6U8bB6bxHI1cGss6ZMZWUdND',
  APISECRET: '5Pzy5jBFju3QtZKo58R2kPqS4iO2CnEihI7GOQvJBz6w9Ik4qGOJaQu9IJ3gKNKD'
});


const start = async function() {
  /*await binance.futuresLeverage( 'ADAUSDT', 10 );
  await binance.futuresMarginType( 'ADAUSDT', 'CROSSED' );
  
  await binance.futuresPositionMargin( "ADAUSDT", 5, 1 )
  const result =  await binance.futuresMarketBuy( 'ADAUSDT', 5, {newOrderRespType: 'RESULT'} )
  */
 // const result =  await binance.futuresMarketSell( 'ADAUSDT', 5 );
 //const result = await binance.futuresOpenOrders();

 let position_data = await binance.futuresPositionRisk(), markets = Object.keys( position_data );
for ( let market of markets ) {
  let obj = position_data[market], size = Number( obj.positionAmt );
  if ( size == 0 ) continue;
  console.log(obj);
  let leverage = 5
  console.info( `${obj.leverage}x\t${market}\t${obj.unRealizedProfit}` );
  //console.info( obj ); //positionAmt entryPrice markPrice unRealizedProfit liquidationPrice leverage marginType isolatedMargin isAutoAddMargin maxNotionalValue
}

  //const result = await binance.futuresBalance();
  /*binance.balance((error, balances) => {
    if ( error ) return console.error(error);
    console.info("balances()", balances.SHIB);
    console.info("ETH balance: ", balances.ETH.available);
  });*/
  // console.log(result);
}

// parse application/json
//app.use(bodyParse.json())
app.get('/', function(req, res){
  console.log('loaded from get')
  //start();
  res.send('abc');
  //console.log(x);
});


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

    //console.log(req.body);
    //const result = await binance.futuresBalance();
    console.log(result);
    res.send('200 response - working fine');
});
app.get('/testapi2', function(req, res){

  //console.log(req.body);
  const result = await binance.futuresBalance();
  console.log(result);
  res.send('200 response - working fine');
});


  var host = '0.0.0.0';
  var server = app.listen(process.env.PORT|| 8080,host, function(){
      var port = server.address().port;
      console.log('server is running ON port',port);
  })
   console.log('Express started on port 3001');
 

 
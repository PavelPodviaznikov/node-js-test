var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var operator=request.param('operator');
  var answer = "Answer = "+calculator(a,b,operator);
  response.send(answer);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

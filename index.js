var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/calc1', function(request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var operator=request.param('operator');
  var answer = "Answer = "+calculator(a,b,operator);
  response.send(answer);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
function calculator(x, y, oper){
	if(oper==="plus")
	{
		return x + y;
	}
	else if(oper==="minus"){
		return x-y;
	}
	else if(oper==="multiply"){
		return x*y;
	}
	else if(oper==="divide"){
		return x/y;
	}
}
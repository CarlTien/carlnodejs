var express = require('express');
var url = require("url");
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('*', function(request, response) {
 // response.render('pages/index');
 var pathname = url.parse(request.url).pathname;
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("你是从"+pathname+"这里访问的吧宝宝？");
 response.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



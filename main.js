var http = require('http');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = 'hello world';
    }
    else if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end('Not found');
        return;
    }
    response.writeHead(200);
    response.end(url);
 
});
app.listen(3000);
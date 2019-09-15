var http = require('http');
var url = require('url');
var fs = require ('fs');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id ;
        if(_url == '/'){
            var title = 'welcome';
        }
        if (_url =='/favicon.ico') {
            
                response.writeHead(404);
                response.end('Not found');
                return;
            
        }
        //for (var i = 0; i<list.length; i++)
            
            fs.readdir('./data',function (err, list){

                console.log(list[0]);
            });
            fs.readFile(`data/${title}`, 'utf8', function (err, description) {   
                var data = description;
                var Template_HTML = ` 
                <!DOCTYPE html>
                <html>
                <head>
                    <title>web1</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    ${list}
                    <h2>${title}</h2>
                    <p>${data}<p>
                </body>
                </html>
                    `;
                    
            response.writeHead(200);
            response.end(Template_HTML);
            });
        
        
    // <ul> 
    //         <li><a href="/?id=HTML">HTML</a></li>
    //         <li><a href="/?id=CSS">CSS</a></li>
    //         <li><a href="/?id=Javascript">Javascript</a></li>
    // </ul>
        
        
        
    
});
app.listen(3000);
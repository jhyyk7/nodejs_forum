var http = require('http');
var url = require('url');
var fs = require ('fs');
var tmplate = require ('./template.js');



var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var path_name = url.parse(_url, true).pathname;
    var title = queryData.id ;
        if(path_name == '/'){
            if(_url == '/')
            {
                var title = 'welcome';
                queryData.id ='WEB';
            }
            
            fs.readdir('./data',function(err, filelist) {
            
                var line = `<ul>`;
                for (var i = 0; i <filelist.length; i++) {
            
                    
                     line = line + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                }
                     line = line + `</ul>`;
                    fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {   
                        
                        var Template_HTML = ` 
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>${title}</title>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1><a href="/">WEB</a></h1>
                            ${line}
                            <h2>${title}</h2>
                            <p>${description}<p>
                        </body>
                        </html>
                        `;
                        response.writeHead(200);
                        response.end(Template_HTML);
                        console.log (url.parse(_url, true));
                        console.log(line);
                });
            });
        }
        else if (_url =='/favicon.ico') {
            
                response.writeHead(404);
                response.end('Not found');
                return;
            
        }
            
});
app.listen(3000);
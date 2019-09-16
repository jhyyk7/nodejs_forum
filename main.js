var http = require('http');
var url = require('url');
var fs = require ('fs');
var qs = require ('querystring');
var template_HTML = function (title, list, description) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        ${list}   
        <a href="/create">create</a>    
        <h2>${title}</h2>
        <p>${description}<p>
    </body>
    </html>
    `;
}
var template_LIST = function (filelist) {
    var line = `<ul>`;
    for (var i = 0; i <filelist.length; i++) {
        line = line + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        }
        line = line + `</ul>`;
        return line;

}



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
                fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
                    var list = template_LIST(filelist);
                    var template = template_HTML(title, list, description)   
                    
                    
                    
                    response.writeHead(200);
                    response.end(template);
                    
                            
                        
                });
            });
        }
        else if (_url =='/create') {
            fs.readdir('./data', function(error, filelist){
                var title = 'WEB - create';
                var list = template_LIST(filelist);
                var template = template_HTML(title, list, `
                  <form action="http://localhost:3000/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p>
                      <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p>
                      <input type="submit">
                    </p>
                  </form>
                `);
                
                response.writeHead(200);
                response.end(template);
              });

        }
        else if (_url =='/create_process') {
                var body = '';
                request.on('data', function(data){
                        body = body + data;                      
                    });
                request.on('end', function(){
                        var post = qs.parse(body);
                        var title = post.title;
                        var description = post.description;
                        
                    fs.writeFile(`./data/${title}`,`${description}`, function(){

                        response.writeHead(302, {Location: `/?id=${title}`});
                        response.end('success');
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
module.exports = {
    HTML: function (title, list, description, menu) {
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
            ${menu}
            <h2>${title}</h2>
            <p>${description}<p>
        </body>
        </html>
        `;
    },
    LIST:function (filelist) {
        var line = `<ul>`;
        for (var i = 0; i <filelist.length; i++) {
            line = line + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            }
            line = line + `</ul>`;
            return line;
    
    }
}
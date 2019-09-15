var fs = require ('fs');

var read = function () {
    return new Promise(function(resolve, reject) {
        fs.readFile('./sample.txt', 'utf8', function(err, result){
            if(err) reject(err);
            else {
                
                console.log("읽기 : " + result);
                resolve();
            }
        });
    });
};

var write = function (buf){
    return new Promise(function(resolve, reject) {
        fs.writeFile('./sample.txt', buf, function(err) {
            if (err) reject(err);
            else {
                console.log('쓰기 완료');
                resolve();
            }
        });
    });
};

async function testD() {

    var buf = 'hello';
    await write(buf); 
    
    
}

async function testC() {

    
    
    await read();
    
}
testC(); //읽기
testD();//쓰기

template.writefile();
template.readfile();

module.exports = {

writefile : 

}


var templte = require ('/template.js');


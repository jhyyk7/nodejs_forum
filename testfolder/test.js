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

var readdir = function (id) {
    return new Promise(function (resolve, reject) {
        fs.readFile (`../data/${id}`,'utf8',function(err, description) {
                if (err) reject(err);
                else {
                    console.log(description);
                    resolve();
                }
        })
    })
}

async function testD() {

    var buf = 'hello';
    await write(buf); 
    
    
}
async function testB() {

    
    var id = 'CSS';
    await readdir(id);
    
}
async function testC() {

    
    
    await read();
    
}

module.exports = {
      a1 : async function testD() {

        var buf = 'hello';
        await write(buf); 
        
        
    }
    , a2 : async function testB() {

    
        var id = 'CSS';
        await readdir(id);
        
    }
    , a3 : async function testC() {

    
    
        await read();
        
    }
}


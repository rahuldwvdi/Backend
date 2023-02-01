//server creation

//http module
const http = require('http');
const fs=require('fs');


//create server and send request
const server = http.createServer((req,res)=>{
    console.log('reuest has been made from browser to server');
    //console.log(req.method);
    //console.log(req.url);

    res.setHeader('Content-Head','text/html');
    //res.write('<h1>hello rahul :) </h1>');
    //res.write('<h2>how u doin</h2>');
    //res.end();

    


    //sending html file as a response
    fs.readFile('./views/index.html',(err, fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            //res.write(fileData);
            res.end(fileData);
        }
    });
    
});

//listening server
//port number, host, callback func
server.listen(3000, 'localhost',()=>{
    console.log('server is listening on port 3000')
});

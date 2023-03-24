var http=require('http');
var fs=require('fs');

var ind=fs.readFileSync('index.html');

//var SerialPort=require("serialport");

const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM3', baudRate: 9600 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))



parser.on('data',function(data){
    console.log(data);
});

// var app=http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end(ind);
// });

// var io=require('socket.io').applylist(app);

// io.on('connection',function(data){
//     console.log(data);

//     io.emit('data',data);
// });

app.listen(3000);
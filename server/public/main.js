const socket=io();

sockets.on('data', function (data){
    console.log(data);
});
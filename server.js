var express = require('express')
var app = express()

var http =require('http').createServer(app)

var PORT =process.env.PORT || 3000

http.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')

})

//socket use

var io = require('socket.io')(http)

io.on('connection',(socket)=>{
    console.log("connected..S")
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})
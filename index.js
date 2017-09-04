const CONFIG = require('./src/config/config');
var port = CONFIG.port;

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bparser = require('body-parser');

//routes
var arsInsert = require('./src/routes/ARS/ars-insert');
var arsMenu = require('./src/routes/ARS/ars-menu-update');
var arsCallUpdate = require('./src/routes/ARS/ars-call-update');
var arsCallStart = require('./src/routes/ARS/ars-call-start');
var arsCallEnd = require('./src/routes/ARS/ars-call-end');

//middleware
var responseHeader = require('./src/middleware/response-header');
//외부 접속 허용
app.use(responseHeader(CONFIG.cors));

app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());


app.post('/test', function(req, res){
    var member = req.body.member_yn;
    var hp = req.body.call_number;
    var time = new Date();
    var msg = member + hp + '    ' + time;
    io.emit('chat message', msg);
});

app.post('/first' , arsInsert);
app.post('/menu' , arsMenu);
app.post('/callbell' , arsCallUpdate);
app.post('/consultstart' , arsCallStart);
app.post('/consultend' , arsCallEnd);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// server start
http.listen(5500, function(){
    console.log('listening on *:5500');
});

module.exports = app;

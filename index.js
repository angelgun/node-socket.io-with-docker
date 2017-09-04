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

//TODO 미들웨어로 빼야 하나 말아야 하나
var callbelldata = (req, res, next) => {
    var sn = req.body.sn;
    var branchNum2 = req.body.branch_number2;
    var callbell = [branchNum2 , sn];
    io.emit('callbell', callbell );
    next();
}

app.post('/first' , arsInsert);
app.post('/menu' , arsMenu);
app.post('/callbell' , callbelldata , arsCallUpdate);
app.post('/consultstart' , arsCallStart);
app.post('/consultend' , arsCallEnd);

// server start
http.listen(5500, function(){
    console.log('listening on *:5500');
});

module.exports = app;
# Nodejs Socket.io Docker연결

### Nodejs
디렉토리 구조
```
src/
    config/
    dao/
    middleware/
    routes/
    util/
test/
index.js
package.json
```
##### config
각종 설정 모음
##### dao
DB접속 가능한 클래스
##### middleware
express에서 사용하는 각 라우터가 사용해야 하는 함수
##### routes
라우터 모음
##### util
각종 사용함수 모음
##### test
단위 테스트 및 라우터 테스트 함수 모음
##### index.js
다른 nodejs의 app.js나 server.js와 같음


### socket.io(with socket.io-client)
```
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
```
로 연결후 서버에 io.on으로 통신
##### example
###### server
```
io.emit('chat message', msg);
```
###### client
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
var socket = io.connect('serverDomain');
return {
    on: function (eventName, callback) {
        socket.on(eventName, callback);
    },
    emit: function (eventName, data) {
        socket.emit(eventName, data);
    }
};

io.on('chat message', msg);
```
Angular등 각종 프레임워크 사용시 서비스로 빼서 사용가능

### Docker
#### Dockerfile
```
FROM 사용할 이미지
MAINTAINER 만든사람(옵션)
RUN 쉘스크립트 명령어
ADD,COPY 파일복사
WORKDIR 명령어를 실행시킬 디렉토리
VOLUME 볼륨연결
EXPOSE 포트연결
CMD 컨테이너 시작시 실행할 명령어
```
#### docker build
```
docker bulid -t test:0.0 .
```
##### -t
tag 설정
##### test:0.0
태그 test에 버전 0.0
#### docker run
```
docker run -d -p 3000:3000 -v $(pwd):/workDir test:0.0
```
#### -d
백그라운드 실행
#### -p
포트 연결(옵션)
#### -v
볼륨 연결
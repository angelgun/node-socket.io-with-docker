FROM node:7.3.0

# 유저 생성
RUN useradd --user-group --create-home --shell /bin/false app

ADD . /var/www/test-socket
RUN chown -R app:app /var/www/*

# 의존 모듈 설치
USER app
WORKDIR /var/www/test-socket
RUN npm install

VOLUME ["/var/www/test-socket"]

# 컨테이너 시작 시 서비스 실행
CMD ["node", "index.js", "production"]

# FizzBuzz

A bit distributed.

1. Run nodejs server | fizz server | PORT: 16000
2. Run golang server | buzz server | PORT: 16001
3. Run react client | UI | PORT: 3000

## Run via docker

```shell
# fizz server
docker run --rm --name "fizzbuzz-server-nodejs" -p 16000:16000 -d f0c1s/fizzbuzz-server-nodejs
## buzz server
docker run --rm --name "fizzbuzz-server-golang" -p 16001:16001 -d f0c1s/fizzbuzz-server-golang
### app
docker run --rm --name "fizzbuzz-client-react" -p 3000:3000 -d f0c1s/fizzbuzz-client-react

```

## Run via source code

```shell
cd server-nodejs && npm install && npm run start &
cd ..
cd server-golang && go run server.go &
cd ..
cd client-react && yarn && yarn start &
```

## Build your docker images

```shell
docker build . -t f0c1s/fizzbuzz-server-nodejs
docker build . -t f0c1s/fizzbuzz-server-golang
docker build . -t f0c1s/fizzbuzz-client-react
```

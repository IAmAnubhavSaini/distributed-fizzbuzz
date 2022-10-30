# FizzBuzz client

## RUN via docker

```shell
## when you want to remove the container after it exits.
docker run --rm --name "fizzbuzz-client-react" -p 3000:3000 -d f0c1s/fizzbuzz-client-react

## You need two servers for this frontend to work properly.
## fizz
docker run --rm --name "fizzbuzz-server-nodejs" -p 16000:16000 -d f0c1s/fizzbuzz-server-nodejs
## buzz
docker run --rm --name "fizzbuzz-server-golang" -p 16001:16001 -d f0c1s/fizzbuzz-server-golang
```

## RUN via source code

```shell
# Run node server: checkout ../server-nodejs/README.md
# Run golang server: checkout ../server-golang/README.md

# Run client-react
npm run start # OR yarn start 
```

# Buzz | fizzbuzz/server-golang

## Run

### via docker

```shell

## delete container on exit
docker run --rm --name "fizzbuzz-server-golang" -p 16001:16001 -d f0c1s/fizzbuzz-server-golang

## persist container on exit
docker run --name "fizzbuzz-server-golang" -p 16001:16001 -d f0c1s/fizzbuzz-server-golang

```

### via source code

```
go run server.go

 ┌───────────────────────────────────────────────────┐
 │                   Fiber v2.39.0                   │
 │              http://127.0.0.1:16001               │
 │      (bound on host 0.0.0.0 and port 16001)       │
 │                                                   │
 │ Handlers ............. 2  Processes ........... 1 │
 │ Prefork ....... Disabled  PID ............. 39324 │
 └───────────────────────────────────────────────────┘

```

## Examples

```
curl -i http://localhost:16001
HTTP/1.1 404 Not Found
Date: Sat, 29 Oct 2022 04:13:24 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 7

/:input%


curl -i http://localhost:16001/1
HTTP/1.1 406 Not Acceptable
Date: Sat, 29 Oct 2022 04:13:28 GMT
Content-Length: 0



curl -i http://localhost:16001/2
HTTP/1.1 406 Not Acceptable
Date: Sat, 29 Oct 2022 04:13:30 GMT
Content-Length: 0



curl -i http://localhost:16001/3
HTTP/1.1 406 Not Acceptable
Date: Sat, 29 Oct 2022 04:13:33 GMT
Content-Length: 0



curl -i http://localhost:16001/4
HTTP/1.1 406 Not Acceptable
Date: Sat, 29 Oct 2022 04:13:34 GMT
Content-Length: 0



curl -i http://localhost:16001/5
HTTP/1.1 200 OK
Date: Sat, 29 Oct 2022 04:13:35 GMT
Content-Type: text/plain; charset=utf-8
Content-Length: 4

Buzz%

```

# FIZZ server | fizzbuzz/server-nodejs

## Run

```

npm run start

```

## Examples

```

curl -i http://localhost:16000/1
HTTP/1.1 406 Not Acceptable
X-Powered-By: Express
Access-Control-Allow-Origin: *
Date: Sat, 29 Oct 2022 03:39:31 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0


curl -i http://localhost:16000/2
HTTP/1.1 406 Not Acceptable
X-Powered-By: Express
Access-Control-Allow-Origin: *
Date: Sat, 29 Oct 2022 03:39:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 0


curl -i http://localhost:16000/3
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 4
ETag: W/"4-S+rCo7Ry1R1u8TyVO6OG30ULwlY"
Date: Sat, 29 Oct 2022 03:37:05 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Fizz%

```


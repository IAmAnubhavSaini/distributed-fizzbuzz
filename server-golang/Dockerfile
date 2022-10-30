# syntax=docker/dockerfile:1

FROM golang:1.16-alpine

WORKDIR /usr/src/app

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY server.go ./

EXPOSE 16001

RUN go build -o fizzbuzz-server-golang

CMD ["/usr/src/app/fizzbuzz-server-golang"]

FROM nginx:1.12-alpine

MAINTAINER zengming

ADD ./bin /usr/share/nginx/html

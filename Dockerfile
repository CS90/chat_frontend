FROM node:6.12.3

COPY . /code/

WORKDIR /code/

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nginx -y

COPY default /etc/nginx/sites-enabled/

RUN nginx -t && service nginx stop

EXPOSE 80

RUN npm run build
COPY build /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]

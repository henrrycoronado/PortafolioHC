FROM nginx:alpine

COPY index.html index.js index.css /usr/share/nginx/html/
COPY src /usr/share/nginx/html/src
COPY nginx.conf.example /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

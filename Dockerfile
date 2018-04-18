FROM nginx:1.12.2-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY build/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]


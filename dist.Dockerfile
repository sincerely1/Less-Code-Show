FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:18.16.0-alpine as builder
 
WORKDIR /code
 
# 单独分离 package.json，是为了安装依赖可最大限度利用缓存
COPY . ./
RUN npm install pnpm -g && pnpm install && npm run build-only
 
# 选择更小体积的基础镜像
FROM nginx:latest
COPY --from=builder code/dist /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Build stage
FROM node:lts-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY build_files/default.conf.template /etc/nginx/conf.d/default.conf

EXPOSE 30001

CMD ["nginx", "-g", "daemon off;"]

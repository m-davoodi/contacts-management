FROM node:16-alpine as build-stage
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --pure-lockfile
COPY ./ /app/
RUN yarn build


FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /app/config/nginx.conf /etc/nginx/conf.d/default.conf

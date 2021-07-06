# Stage 1 - compile repository
FROM node:14-alpine as compile
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

# Stage 1 - download only production dependencies
FROM node:14-alpine as install
WORKDIR /usr/src/app
COPY --from=compile /usr/src/app/package.json /usr/src/app/package-lock.json ./
RUN npm install --only=production

# Stage 3 - make clean staging area
FROM node:14-alpine as stage
WORKDIR /usr/src/app
COPY --from=install /usr/src/app/node_modules/   node_modules/
COPY --from=compile /usr/src/app/config/         config/
COPY --from=compile /usr/src/app/public/         public/
COPY --from=compile /usr/src/app/src/            src/
COPY --from=compile /usr/src/app/src/js/         src/js/
COPY --from=compile /usr/src/app/package*.json   ./

# Stage 4 - final copy!
FROM node:14-alpine as deploy
WORKDIR /usr/src/app
COPY --from=stage /usr/src/app ./
EXPOSE 8080
CMD [ "node", "./src/app.js" ]

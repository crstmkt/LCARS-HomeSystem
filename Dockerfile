# pull the official base image
FROM node:16
# set working direction
WORKDIR /
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package*.json ./

RUN npm install
# add app
COPY . ./
# start app
CMD ["npm", "start"]
FROM node:12.18-alpine
ENV NODE_ENV=production
ENV PORT=80

# Create app directory
RUN mkdir -p /app
WORKDIR /app

WORKDIR /app
COPY . .

# Install app dependencies
COPY package.json /app
RUN npm install
RUN npm install express

# Bundle app source
COPY . /app

EXPOSE 80
CMD ["npm", "start"]
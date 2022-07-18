FROM node:16

# Create app directory
WORKDIR /app

COPY package*.json ./
# Install app dependencies
RUN npm  ci --only=production
# Bundle app source
COPY . . 

EXPOSE 3000
CMD ["node", "server.js"]
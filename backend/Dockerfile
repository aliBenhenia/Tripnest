FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies (including express, locally)
RUN  npm install 
# RUN cd /app && npm install express

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code
COPY . .

EXPOSE 3001

# Run nodemon to start the server
CMD ["nodemon", "src/server.js"]

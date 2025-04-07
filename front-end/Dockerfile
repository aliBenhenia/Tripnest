# Use the official Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependencies installation
COPY package*.json ./

# Install dependencies inside the container
RUN npm install && npm install framer-motion


# Copy the rest of the application code
COPY . .

# Expose the correct port (Next.js default is 3000)
EXPOSE 3000

# Start the Next.js dev server
CMD ["npm", "run", "dev"]

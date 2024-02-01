# Use an official Node.js image as the base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy TypeScript files to the container
COPY . .

# Build TypeScript code to JavaScript
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the Express.js application
CMD [ "node", "dist/index.js" ]

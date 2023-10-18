# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your app's source code to the container
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]

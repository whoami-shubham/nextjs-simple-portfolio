FROM node:18-alpine

# Create the directory on the node image
# where our Next.js app will live
RUN mkdir -p /app

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn next build

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]

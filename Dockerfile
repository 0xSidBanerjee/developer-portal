# Stage 1
FROM node:20.11.1-alpine3.18 AS builder
 
# Set working directory
WORKDIR /app
 
# Copy package.json and package-lock.json and .npmrc
COPY package.json package-lock.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code
COPY . .
 
# Build the Next.js application
RUN npm run build
 
# Stage 2
FROM node:20.11.1-alpine3.18
 
# Set working directory
WORKDIR /app

# Expose port 3000
EXPOSE 3000
 
# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public

RUN npm install --omit=dev

CMD ["npm", "start"]
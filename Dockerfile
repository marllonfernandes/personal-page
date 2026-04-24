# Stage 1: Build the Vue application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve the application and API
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
# Install only production dependencies
RUN npm ci --omit=dev

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Copy backend server script
COPY server.js .

# Expose port (Cloud Run uses 8080 by default)
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start Node.js server
CMD ["node", "server.js"]

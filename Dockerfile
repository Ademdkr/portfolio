# Stage 1: Build Angular Application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm@10.18.3

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Angular application for production
RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built application from builder stage
# Angular 21 outputs to dist/portfolio/browser by default
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

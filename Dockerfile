# Stage 1: Build the Angular Application
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code and build the application
COPY . .
RUN npm run build -- --output-path=./dist/browser --configuration=production

# Stage 2: Serve the Built Application with Nginx
FROM nginx:stable-alpine AS final

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# -- CRITICAL FIX --
# Copy the 'browser' folder from the build stage to a temp directory first
COPY --from=build /app/dist/browser /tmp/browser

# Move the CONTENTS of /tmp/browser to /usr/share/nginx/html
# This ensures no nested 'browser' folder exists
RUN cp -r /tmp/browser/* /usr/share/nginx/html/ && \
    rm -rf /tmp/browser

# Fix permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
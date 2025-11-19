# Stage 1: Build the Angular Application
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code and build the application
COPY . .
# The output path is typically 'dist/<project-name>', based on your repository name, we'll use a generic path.
# If the build fails, check your angular.json for the 'outputPath'.
RUN npm run build -- --output-path=./dist/browser --configuration=production

# Stage 2: Serve the Built Application with Nginx
FROM nginx:stable-alpine AS final
# Copy the custom Nginx configuration (we will create this next)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application files from the build stage
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Default Nginx port is 80, expose it
EXPOSE 80

# Command to run the web server
CMD ["nginx", "-g", "daemon off;"]

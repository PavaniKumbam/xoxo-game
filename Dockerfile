# Use a lightweight web server
FROM nginx:alpine

# Remove default static content from nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy our web app files to the nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to run the app
EXPOSE 80

# Start Nginx when container runs
CMD ["nginx", "-g", "daemon off;"]


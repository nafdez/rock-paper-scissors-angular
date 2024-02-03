## TESTING
# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:21-alpine as build

# Set the working directory
WORKDIR /home/app/

# Add the source code to app
COPY ./ /home/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.25.3-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /home/app/dist/rock-paper-scissors /usr/share/nginx/html

# Expose port 80
EXPOSE 80
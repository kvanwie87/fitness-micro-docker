# Stage 1: Run the application (Assumes the JAR is already built and available in the target directory)
FROM amazoncorretto:25-alpine
# Set the working directory
WORKDIR /app
# Copy the JAR file from your local machine to the container
# Ensure the JAR file name matches your project output
COPY target/*.jar app.jar
# Expose the default Spring Boot port
EXPOSE 8082
# Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
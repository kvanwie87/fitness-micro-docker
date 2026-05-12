# Stage 1: Build the JAR file using Maven
FROM maven:3.9-amazoncorretto-25 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Build the application, skipping tests for speed
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM amazoncorretto:25-alpine
WORKDIR /app
# Copy the generated JAR from the build stage
COPY --from=build /app/target/*.jar eureka-server.jar
# Eureka default port is 8761
EXPOSE 8761
# Set the entry point to run the JAR
ENTRYPOINT ["java", "-jar", "eureka-server.jar"]

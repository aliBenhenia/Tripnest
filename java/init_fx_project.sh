#!/bin/bash
set -e

# Project root
PROJECT_NAME="fx-deals-api"
echo "Creating project $PROJECT_NAME..."
mkdir -p $PROJECT_NAME
cd $PROJECT_NAME

# 1️⃣ Create folder structure
echo "Creating folder structure..."
mkdir -p src/main/java/com/bloomberg/fxdeals/{controller,service,repository,model,dto,validation,exception,config}
mkdir -p src/main/resources/db/migration
mkdir -p src/test/java/com/bloomberg/fxdeals/{controller,service,repository,validation,integration}
mkdir -p src/test/resources/testcontainers
mkdir -p docker postman performance

# 2️⃣ Create minimal main Java file
cat > src/main/java/com/bloomberg/fxdeals/FxDealsApplication.java <<EOL
package com.bloomberg.fxdeals;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FxDealsApplication {
    public static void main(String[] args) {
        SpringApplication.run(FxDealsApplication.class, args);
    }
}
EOL

# 3️⃣ Sample Controller
cat > src/main/java/com/bloomberg/fxdeals/controller/DealController.java <<EOL
package com.bloomberg.fxdeals.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/deals")
public class DealController {
    @GetMapping("/ping")
    public String ping() {
        return "FX Deals API is running!";
    }
}
EOL

# 4️⃣ Minimal pom.xml
cat > pom.xml <<EOL
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.bloomberg</groupId>
    <artifactId>fxdeals</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <properties>
        <java.version>17</java.version>
        <spring.boot.version>3.2.3</spring.boot.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>io.rest-assured</groupId>
            <artifactId>rest-assured</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
EOL

# 5️⃣ Dockerfile
cat > docker/Dockerfile <<EOL
FROM maven:3.9.4-eclipse-temurin-17

WORKDIR /app

# Copy POM first to cache dependencies
COPY pom.xml .

RUN mvn dependency:go-offline

# Copy the rest of the code
COPY src ./src

# Build the app
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/fxdeals-0.0.1-SNAPSHOT.jar"]
EOL

# 6️⃣ Docker Compose
cat > docker-compose.yml <<EOL
version: '3.8'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: fxuser
      POSTGRES_PASSWORD: fxpass
      POSTGRES_DB: fxdb
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  app:
    build:
      context: .
      dockerfile: docker/Dockerfile
    ports:
      - "8080:8080"
    depends_on:
      - db
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/fxdb
      SPRING_DATASOURCE_USERNAME: fxuser
      SPRING_DATASOURCE_PASSWORD: fxpass

volumes:
  pgdata:
EOL

# 7️⃣ Makefile
cat > Makefile <<EOL
up:
	docker-compose up --build

down:
	docker-compose down -v

logs:
	docker-compose logs -f

test:
	docker-compose run --rm app mvn test

coverage:
	docker-compose run --rm app mvn jacoco:report
EOL

# 8️⃣ README.md
cat > README.md <<EOL
# FX Deals API

Spring Boot FX Deals API project fully Dockerized.  

- Run everything: \`make up\`  
- DB: Postgres  
- App: Spring Boot
EOL

echo "✅ Project initialized successfully! Run 'make up' to build and start the app."

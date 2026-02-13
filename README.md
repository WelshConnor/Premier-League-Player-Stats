# Premier Zone

A Spring Boot REST API for managing and querying English Premier League player statistics.

## Overview

Premier Zone provides a backend service to store, retrieve, filter, and manage EPL player data including performance metrics, demographics, and team information.

## Tech Stack

- **Java 25**
- **Spring Boot 4.0.1** (Web MVC, Data JPA)
- **PostgreSQL**
- **Hibernate / Jakarta Persistence**
- **Apache Maven** (via Maven wrapper)

## Prerequisites

- Java 25+
- PostgreSQL running on `localhost:5432`
- Maven (or use the included wrapper)

## Setup

1. **Clone the repository**

2. **Configure the database**

   Update [src/main/resources/application.properties](src/main/resources/application.properties) with your PostgreSQL credentials:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

   Hibernate will automatically create/update the `player_stats` table on startup (`ddl-auto=update`).

3. **Build the project**

   ```bash
   # Windows
   mvnw.cmd clean package

   # Linux / macOS
   ./mvnw clean package
   ```

4. **Run the application**

   ```bash
   mvnw.cmd spring-boot:run
   ```

   The API will be available at `http://localhost:8080`.

## API Endpoints

All endpoints are prefixed with `/players`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/players` | Get all players |
| `GET` | `/players?name={name}` | Search players by name (case-insensitive) |
| `GET` | `/players?team={team}` | Filter players by team |
| `GET` | `/players?position={position}` | Filter players by position |
| `GET` | `/players?nation={nation}` | Filter players by nation (case-insensitive) |
| `GET` | `/players?team={team}&position={position}` | Filter by team and position |
| `POST` | `/players` | Add a new player (returns `201 Created`) |
| `PUT` | `/players` | Update an existing player (returns `200 OK` or `404 Not Found`) |
| `DELETE` | `/players/{id}` | Delete a player by ID |

### Player Object

```json
{
  "id": 1,
  "name": "Erling Haaland",
  "team": "Manchester City",
  "nation": "Norway",
  "position": "FWD",
  "age": 24,
  "mp": 35,
  "starts": 35,
  "mins": 3050,
  "goals": 27,
  "assists": 5,
  "pk": 3,
  "yellowCards": 2,
  "redCards": 0,
  "xg": 24.5,
  "xag": 4.1
}
```

### Positions

`GK` · `DEF` · `MID` · `FWD`

## Running Tests

```bash
mvnw.cmd test
```

## Project Structure

```
src/
└── main/
    ├── java/com/pl/premier_zone/
    │   ├── PremierZoneApplication.java   # Entry point
    │   └── player/
    │       ├── Player.java               # JPA entity (player_stats table)
    │       ├── PlayerController.java     # REST controller
    │       ├── PlayerService.java        # Business logic
    │       └── PlayerRepository.java     # Data access layer
    └── resources/
        └── application.properties        # App configuration
```

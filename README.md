# Simple Backend

A simple Node.js backend server built with Express, MongoDB, and Mongoose.

## Features

-   RESTful API for managing leads
-   MongoDB database integration with Mongoose
-   Request logging with Morgan
-   Environment variable configuration
-   Error handling middleware

## Tech Stack

-   **Node.js** - Runtime environment
-   **Express** - Web framework
-   **MongoDB** - Database
-   **Mongoose** - MongoDB object modeling
-   **Morgan** - HTTP request logger
-   **Nodemon** - Development server auto-reload
-   **dotenv** - Environment variable management

## Project Structure

```
simpleBackend/
├── controllers/
│   └── lead.controller.js    # Lead business logic
├── routers/
│   └── lead.router.js        # Lead routes
├── models/
│   └── lead.model.js         # Lead Mongoose model
├── index.js                  # Server entry point
├── app.js                    # Express app configuration
├── package.json
└── README.md
```

## Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory (copy from `.env.example.txt`):

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/simplebackend
```

4. Make sure MongoDB is running on your system

## Running the Server

### Development Mode (with auto-reload):

```bash
npm run dev
```

### Production Mode:

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000).

## API Endpoints

### Health Check

-   **GET** `/health` - Check server status

### Leads

-   **GET** `/api/leads` - Get all leads
-   **GET** `/api/leads/:id` - Get a specific lead by ID
-   **POST** `/api/leads` - Create a new lead
-   **PUT** `/api/leads/:id` - Update a lead
-   **DELETE** `/api/leads/:id` - Delete a lead

## Lead Model

A lead has the following fields:

-   `name` (String, required) - Lead's name
-   `email` (String, required) - Lead's email address
-   `phone` (String, optional) - Lead's phone number
-   `message` (String, optional) - Lead's message
-   `createdAt` (Date, auto-generated) - Creation timestamp
-   `updatedAt` (Date, auto-generated) - Last update timestamp

## Example API Usage

### Create a Lead

```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "message": "Interested in your services"
  }'
```

### Get All Leads

```bash
curl http://localhost:3000/api/leads
```

### Get Lead by ID

```bash
curl http://localhost:3000/api/leads/{leadId}
```

### Update a Lead

```bash
curl -X PUT http://localhost:3000/api/leads/{leadId} \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com"
  }'
```

### Delete a Lead

```bash
curl -X DELETE http://localhost:3000/api/leads/{leadId}
```

## Environment Variables

-   `PORT` - Server port (default: 3000)
-   `MONGODB_URI` - MongoDB connection string (default: mongodb://localhost:27017/simplebackend)

## License

ISC

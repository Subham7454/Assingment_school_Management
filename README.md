# School Management System

A simple and efficient School Management System API built using Node.js, Express, MySQL, and other related technologies. This project allows users to manage school records, including adding new schools and fetching a list of schools sorted by proximity to the user's location.

## Features

- Add a new school to the database.
- List all schools with distance calculated from a given latitude and longitude.
- API for school management with basic validations.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database to store school data.
- **Haversine Formula**: Used to calculate the distance between two geographic coordinates (latitude and longitude).
- **dotenv**: To manage environment variables.

## Installation

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js
- MySQL or a MySQL-compatible database

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/School_Management.git
   cd School_Management
2. Install the dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following variables:

bash
Copy code
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=school_management
PORT=3000
Set up your MySQL database and tables. You can use the schema provided in the code to create the school_management database and schools table.

3. Start the application:

bash
Copy code
npm start
The API will be running on http://localhost:3000.

API Endpoints
POST /api/schools/addSchool
Add a new school to the database.

Request Body:

json
Copy code
{
  "name": "ABC High School",
  "address": "123 School St, City, Country",
  "latitude": 40.712776,
  "longitude": -74.005974
}
Response:

json
Copy code
{
  "message": "School added successfully",
  "schoolId": 1
}
GET /api/schools/listSchools
Fetch a list of schools sorted by proximity to a given latitude and longitude.

Query Parameters:

latitude: The latitude of the user's location.
longitude: The longitude of the user's location.
Example:

bash
Copy code
GET /api/schools/listSchools?latitude=40.712776&longitude=-74.005974
Response:

json
Copy code
[
  {
    "id": 1,
    "name": "ABC High School",
    "address": "123 School St, City, Country",
    "latitude": 40.712776,
    "longitude": -74.005974,
    "distance": 0
  },
  ...
]
Database Schema
schools Table
Field	Type	Description
id	INT	Primary key, auto-incremented
name	VARCHAR(255)	Name of the school
address	VARCHAR(255)	Address of the school
latitude	FLOAT	Latitude of the school's location
longitude	FLOAT	Longitude of the school's location
Contributing
Feel free to fork this repository and submit pull requests with improvements or bug fixes. Please ensure you follow the code style used in this project.

License
This project is open source and available under the MIT License.

vbnet
Copy code

### Instructions:
- Replace `YourUsername` in the GitHub URL with your actual GitHub username.
- You may want to adjust the project description, installation steps, or any details to suit your project's structure better.

This should give users clear instructions on setting up and using the project, as well as informat

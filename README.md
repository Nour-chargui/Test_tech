# TheBridge

this is a technical test for our internship"application

## Table of Contents

- [Project Overview](#project-overview)
- [Backend](#backend)
  - [Technologies Used](#technologies-used)
  - [Setup](#setup)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Technologies Used](#technologies-used-1)
  - [Setup](#setup-1)
  - [Project Structure](#project-structure)
- [Contributing](#contributing)

## Project Overview

Provide a brief overview of the project, its purpose, and key features.

## Backend

### Technologies Used

- Node.js
- Express
- MongoDB (or any other database you used)
- Mongoose (if applicable)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Nour-chargui/Test_tech.git
   cd Test_tech
   ```
2. The Frontend(TheBridge_test)
   -Technologies Used:
   React
   Axios (for HTTP requests)
   Tailwind CSS
   -Setup:
   Install dependencies: $npm install
   Run server: $npm run dev
   -Project Structure
   src/components: React components.
   src/pages: Different pages of the application.
   public: Static assets.
3. The Backend(Backend_ThBridge)
   -API Endpoints
      Create Course:

      POST /api/courses
      Request Body: JSON representing the course details
      Get All Courses:

      GET /api/courses
      Response: JSON array of courses
      Update Course:

      PUT /api/courses/:id
      Request Body: JSON representing the updated course details
      Delete Course:

      DELETE /api/courses/:id
      Bulk Upload Courses:

      POST /api/courses/bulk-upload
      Request Body: JSON array representing courses
   -Setup:
    Install dependencies: $npm install
    Run server: $npm run dev
   -Project Structure
    /controllers
      courseController.js
    /models
      Course.js
    /routes
      courseRoutes.js
    app.js
    server.js

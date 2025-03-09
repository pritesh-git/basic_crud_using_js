# Node.js REST API with MySQL for Employee Management

This project is a Node.js REST API that interacts with a MySQL database to perform CRUD (Create, Read, Update, Delete) operations on employee data.

## Project Overview

This project demonstrates how to:

* Set up a Node.js server using Express.js.
* Connect to a MySQL database using the `mysql` package.
* Create RESTful API endpoints for employee management.
* Handle HTTP requests (GET, POST, PUT, DELETE).
* Parse JSON request bodies using `body-parser`.

## Technologies Used

* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web framework for Node.js.
* **MySQL:** Relational database management system.
* **mysql:** Node.js driver for MySQL.
* **body-parser:** Middleware for parsing JSON request bodies.

## Prerequisites

* **Node.js and npm:** Ensure Node.js and npm are installed on your system.
* **MySQL:** Ensure MySQL is installed and running.
* **MySQL Database:** Create a database named `users` and a table named `Employee` with the following structure:

    ```
    CREATE TABLE Employee (
        EmpID INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(255),
        EmpCode VARCHAR(255),
        Salary DECIMAL(10, 2)
    );
    ```

## Getting Started

1.  **Clone the repository (if applicable):**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install Dependencies:**

    ```bash
    npm install express mysql body-parser
    ```

3.  **Configure MySQL Connection:**

    * In `app.js`, update the `mysqlConnection` object with your MySQL connection details (host, user, password, database).

4.  **Start the Server:**

    ```bash
    node app.js
    ```

    The server will start running on port 3000.

## API Endpoints

* **GET /employees:**
    * Retrieves a list of all employees.
    * Returns a JSON array of employee objects.
* **GET /employees/:id:**
    * Retrieves an employee by their ID.
    * Returns a JSON object representing the employee.
* **POST /employees:**
    * Creates a new employee.
    * Request body should be a JSON object with `Name`, `EmpCode`, and `Salary` properties.
    * Returns a success message with the number of rows affected.
* **PUT /employees:**
    * Updates an existing employee.
    * Request body should be a JSON object with `EmpID`, `Name`, `EmpCode`, and `Salary` properties.
    * Returns a success message with the number of rows affected.
* **DELETE /employees/:id:**
    * Deletes an employee by their ID.
    * Returns a success message.

## Code Structure

* **`app.js`:**
    * Sets up the Express.js server.
    * Connects to the MySQL database.
    * Defines the API endpoints for employee management.
    * Handles database queries and responses.

## Notes

* This project uses basic error handling. For production use, implement more robust error handling and validation.
* Ensure your MySQL server is running before starting the Node.js server.
* Use a tool like Postman or curl to test the API endpoints.
* The project uses `body-parser` to parse JSON request bodies.
* The mysql connection string should be kept safe, and out of public view.

## Contributing

Feel free to contribute to this project by submitting pull requests.

## License

This project is open-source and available under the MIT License.

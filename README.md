# Student-Management-System
Student Management System - WebApplication

# Student Management System

## Overview
The **Student Management System** is a web-based application designed to manage student data efficiently. This system allows users to add new student records, update existing ones, fetch student data by roll number, and reset the form fields. It interacts with a backend database using **JSONPowerDB (JPDB)** to store, retrieve, and update data through RESTful API calls.

## Features
- **Add New Student**: Users can input and save new student details like Roll No, Full Name, Class, Birth Date, Address, and Enrollment Date.
- **Update Student Data**: If the Roll No exists, the form auto-populates with the student's data, allowing the user to update the information.
- **Data Fetching**: Fetches and displays student data when a Roll No exists in the database.
- **Form Reset**: Resets the form fields to their initial state.
- **Field Validation**: Ensures that all necessary fields are filled before data submission or updating.
- **REST API Integration**: Interacts with JPDB using RESTful API to handle all CRUD operations.

## Benefits of Using JSONPowerDB
- **Simplicity**: JSONPowerDB is designed to be simple and efficient for developers, allowing for easy interaction with JSON data.
- **Flexibility**: It provides a flexible schema that can adapt to various data structures without the need for complex database configurations.
- **RESTful API**: JSONPowerDB offers a RESTful API for easy integration with web applications.
- **High Performance**: The database is optimized for high performance, enabling quick read and write operations.
- **Support for JSON**: Direct support for JSON data format makes it easy to manage data without additional conversions.

## Release History
- **Version 1.0** - Initial release of the Student Management System with core functionalities for managing student records. [Link to Release](https://github.com/yourusername/student-management-system/releases/tag/v1.0)

## Project Structure
- **index.html**: Contains the form for student data entry.
- **index.js**: Handles all JavaScript functions for form validation, data submission, and API interactions.
- **style.css**: Custom styles for the application layout and form presentation.

## Technology Stack
- **Frontend**:
  - HTML for structuring the form and page content.
  - CSS/Bootstrap for styling and making the page responsive.
  - JavaScript for form validation, data processing, and API requests.
  
- **Backend**:
  - JSONPowerDB (JPDB) for database operations such as storing, fetching, and updating student data.
  - RESTful API to communicate between the web application and the database.

## How It Works
1. **Form Input**: The user enters the Roll No, and if the Roll No exists in the database, the rest of the fields auto-populate. If the Roll No is not found, the form becomes editable for new data entry.
2. **Save Operation**: On entering a new Roll No, users can fill the form, and upon clicking the **Save** button, the data is validated and sent to the database.
3. **Update Operation**: If an existing Roll No is detected, the user can update the form fields, and on clicking the **Update** button, the changes are saved in the database.
4. **Reset**: Clears the form and allows the user to start fresh.

## Key Functions in `index.js`
- `validateAndGetFormData()`: Validates the form inputs and retrieves the data in JSON format.
- `saveData()`: Sends a PUT request to save new student records in the database.
- `getrollNo()`: Fetches data from the database based on the Roll No entered.
- `fillData()`: Populates the form with fetched student data for editing.
- `resetForm()`: Clears the form fields and re-enables the Roll No input field.

## Setup Instructions
1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/student-management-system.git


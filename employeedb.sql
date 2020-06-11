-- ----------------------------------------------------------
-- Program Name: create_mysql_employee_DB.sql
-- Program Author: Lewis Cruz
-- Creation Date: 06-10-2020
-- ----------------------------------------------------------

-- Create the employee_DB database
CREATE DATABASE employee_DB;
USE employee_DB;

-- Create the table for departments
CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role (
  id INT PRIMARY KEY,  
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL, 
  role_id INT,
  manager_id INT
);

-- Insert a set of records

# Employee-Tracker
Week-12 HW

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Description

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. This application is a one that allows a company to do the following:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

## Table of Contents

  * [User-Story](#user-story)
  * [Acceptance-Criteria](#acceptance-criteria)
  * [Visuals](#visuals)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## User Story

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

## Acceptance Criteria

```
* The command-line application should allow users to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles
```

## Visuals

![Database Schema](Assets/schema.png)
![Employee Tracker](Assets/employee-tracker.gif)


## Installation

To access this project:

```
1. Go to https://github.com/alek2535/Employee-Tracker

2. Fork the branch and then click on clone or download

3. Paste copied link after `git clone` into your bash console in your desired directory

4. You should now have access to the repository
```

Since there is a `package.json`, you will need to run `npm install`.

Once you have the dependancies installed run the command:

```
node employeetracker.js
```

You will also need to add your information to connect to your MySQL server in `employeetracker.js`, as well as creating a database in your MySQL using the `schema.sql` file. You can also use `seed.sql` to populate your database.

## Usage

For companies that need to keep track of their employees, departments, and roles. This application allows users to easily track and update that information.

Technologies Used:

* JavaScript
* Node.js
* inquirer
* MySQL
* console.table

## Contributing

Use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Credits

Thank you to Carmen Obied(@carmenobied), CJ Pia(@cjpia612), and Zack Corpus(@zcorpuz) who helped get me through this. Bouncing ideas off of each other and providing useful resources helped make this project successful.

## License

[MIT License](./LICENSE)

Copyright (c) [2020] [Alek Valencia]

## Project Status

This application has met all the minimum requirements. There is still room for improvement including adding the following features:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Tests

There are currently no tests for this project.

## Questions

[alek2535](https://github.com/alek2535)

alekvalencia2535@gmail.com

If you have any questions about the project you can reach me at the above email.
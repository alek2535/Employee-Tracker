const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "madeup_company_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  start();
});

function start() {
    inquirer.prompt({
        name: "actions",
        type: "rawlist",
        choices: [
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Done"
        ]
    })
    .then(answer => {
        switch (answer.actions) {
            case "View All Employees":
                selectAll();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                connection.end();
                break;
            case "Done":
                connection.end();
                break;
        }
    })
}

function selectAll() {
    const query = `SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id`
    connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
    });
  }

function addDepartment() {
    inquirer.prompt({
        name: "department",
        type: "input",
        message: "What department would you like to add?",
        validate: answer => {
            if (answer.length < 1) {
                return "Please enter a department name."
            }
            return true;
        } 
    })
    .then( answer => {
        const query = "INSERT INTO department SET ?"
        connection.query(query, {name: answer.department}, (err, res) => {
        if (err) throw err;
        console.log(`${answer.department} was successfully added!`);
        start();
        });
    });
};

function addRole() {
    inquirer.prompt([{
        name: "title",
        type: "input",
        message: "What role would you like to add?",
        validate: answer => {
            if (answer.length < 1) {
                return "Please enter a role name."
            }
            return true;
        } 
    },
    {
        name: "salary",
        type: "input",
        message: "What is the salary for this role?",
        validate: answer => {
            if (answer.length < 1) {
                return "Please enter a salary."
            }
            return true;
        } 
    },
    {
        name: "department_id",
        type: "input",
        message: "What is the department ID for this role?",
        validate: answer => {
            if (answer.length < 1) {
                return "Please enter a department ID."
            }
            return true;
        } 
    }])
    .then( answer => {
    const query = "INSERT INTO role SET ?"
    connection.query(query, 
        {
            title: answer.title,
            salary: parseInt(answer.salary),
            department_id: parseInt(answer.department_id)
        }, (err, res) => {
      if (err) throw err;
      console.log(`${answer.title}, ${answer.salary}, and ${answer.department_id} were successfully added!`);
      start();
    });
  });
};

function addEmployee() {
    inquirer.prompt([{
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
        validate: answer => {
            if (answer.length < 1) {
                return "Please enter the person's first name."
            }
            return true;
        } 
    },
    {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?",
        validate: answer => {
            if (answer.length < 1) {
                return "Please enter the person's last name."
            }
            return true;
        } 
    },
    {
        name: "role_id",
        type: "input",
        message: "What is the employee's role ID?",
        validate: answer => {
            if (answer.length < 1) {
                return "Please enter a role ID."
            }
            return true;
        } 
    }])
    .then( answer => {
    const query = "INSERT INTO employee SET ?"
    connection.query(query, 
        {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: answer.role_id
        }, (err, res) => {
      if (err) throw err;
      console.log(`${answer.first_name}, ${answer.last_name}, and ${answer.role_id} were successfully added!`);
      start();
    });
  });
};

//   function specificRange() {
//     inquirer.prompt([{
//         name: "start",
//         type: "input",
//         message: "Where would you like your search to start?",
//         validate: answer => {
//             if (isNaN(answer) === false) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } 
//     },
//     {
//         name: "end",
//         type: "input",
//         message: "Where would you like your search to end?",
//         validate: answer => {
//             if (isNaN(answer) === false) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } 
//     }])
//     .then( answer => {
//         const query = "SELECT * FROM top5000 WHERE position BETWEEN ? AND ?"
//         connection.query(query, [answer.start, answer.end], (err, res) => {
//         if (err) throw err;
//         console.log(res);
//         start();
//         });
//     });
//   }

//   function sameYear() {
//     inquirer.prompt([{
//         name: "year",
//         type: "input",
//         message: "What artist would you like to search?"
//     }])
//     .then( answer => {
//         const query = `SELECT topAlbums.year, topAlbums.album, topAlbums.position, top5000.title, top5000.artist FROM topAlbums INNER JOIN top5000 ON topAlbums.artist = top5000.artist AND topAlbums.year = top5000.year WHERE topAlbums.artist = ? AND top5000.artist = ?`
//         connection.query(query, [answer.year, answer.year], (err, res) => {
//         if (err) throw err;
//         console.log(res);
//         start();
//         });
//     });
//   }

//   function specificSong() {
//     inquirer.prompt({
//         name: "title",
//         type: "input",
//         message: "What song would you like to search for?" 
//     })
//     .then( answer => {
//         const query = "SELECT * FROM top5000 WHERE ?"
//         connection.query(query, {title: answer.title}, (err, res) => {
//         if (err) throw err;
//         console.log(res);
//         start();
//         }) 
//     });
//   }
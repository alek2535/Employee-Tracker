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
  password: "(54)gOOdbOys",
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
            "Add Departments",
            "Add Roles",
            "Add Employees",
            "Update Employee Role",
            "Done"
        ]
    })
    .then(answer => {
        switch (answer.actions) {
            case "View All Employees":
                selectAll();
                break;
            case "Add Departments":
                specificSong();
                break;
            case "Add Roles":
                sameYear();
                break;
            case "Add Employees":
                connection.end();
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

//   function multipleTimes() {
//     const query = "SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1"
//     connection.query(query, (err, res) => {
//       if (err) throw err;
//       console.log(res);
//       start();
//     });
//   }

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
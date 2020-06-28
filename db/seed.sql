INSERT INTO department (name) 
VALUES ("Sales"), ("Engineering"), ("IT"), ("Accounting");

INSERT INTO role (title, salary, department_id) 
VALUES 
    ("VP Sales", 200000, 1),
    ("Sales Associate", 75000, 1),
    ("Head Engineer", 200000, 2),
    ("Junior Engineer", 100000, 2),
    ("IT Manager", 200000, 3),
    ("IT Anaylst", 200000, 3),
    ("AR Manager", 200000, 4),
    ("AR Analyst", 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
    ("Mary", "Bennett", 1, NULL),
    ("Marcus", "Spears", 2, 1),
    ("Brandi", "Littleton", 3, NULL),
    ("Thomas", "Heart", 4, 3),
    ("Samantha", "Neels", 5, NULL),
    ("Fred", "Campstone", 6, 5),
    ("Marissa", "Giolito", 7, NULL),
    ("Namar", "Williams", 8, 7);

    SELECT * FROM department;
    SELECT * FROM role;
    SELECT * FROM employee;
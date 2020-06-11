var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Port MySQL is using
  port: 3306,

  // MySQL credentials
  user: "root",

  // MySQL password
  password: "CarSoup34!#",
  database: "employee_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

// Function to prompt the user through available options to work with the database
function start() {
  inquirer
    .prompt({
        name: "userOptions",
        type: "list",
        message: "What can I help you do?", 
        choices:["Add a department to the database",
                 "Add an employee role to the database",
                 "Add an employee to the database",
                 "View all departments in the database",
                 "View all roles in the database",
                 "View all employees in the database",
                 "Update an employee role",
                 "Delete an employee role",
                 "Delete an employee record",
                 "Update an employee role",
                 "DISCONNECT"
 
        ]
    })
    .then(function(userResponse) {
      // Based on use response, call the corresponding function to interact with the database
    
      // Use switch cases for all the options:
      switch (true) {
        case 0: 
          userResponse.dataBaseAction === "Add a department to the database"; 
          addDeptToDB();
        case 1:
          userResponse.dataBaseAction === "Add an employee role to the database";
          addRoleToDB();
        case 2:
          userResponse.dataBaseAction === "Add an employee to the database";
          addEmployeeToDB();
        case 3:
          userResponse.dataBaseAction === "View all departments in the database";
          viewDept();
        case 4:
          userResponse.dataBaseAction === "View all roles in the database";
          viewRoles();
        case 5:
          userResponse.dataBaseAction === "View all employees in the database";
          viewEmployees();
        case 6:
          userResponse.dataBaseAction === "Update an employee role";
          deleteDept();
        case 7:
          userResponse.dataBaseAction === "Delete an employee role";
          deleteRoles();
        case 8:
          userResponse.dataBaseAction === "Delete an employee record";
          deleteEmployee();
        case 9:
          userResponse.dataBaseAction === "Update an employee role";
          updateRoles();
        case 10:
          userResponse.dataBaseAction === "DISCONNECT";
          connection.end();
          
          
      }
      console.log("OK You are disconnected from database now - Goodbye");
      console.log("Press CTRL + C to return to terminal.");
 
    });
}




/*


function addDeptToDB() {

  // query the database for all departments
  connection.query("SELECT * FROM departments", function(err, results) {
    if (err) throw err;
    // once you have all the departments, prompt what they would like to name their new dept
    inquirer
      .prompt([
        {
          name: "option",
          type: "deptlist",
          choices: function() {
            var selectionArray = [];
            for (var i = 0; i < results.length; i++) {
              selectionArray.push(results[i].selection_name);
            }
            return selectionArray;
          },
          message: "What department would you like to add?"
        },
        {
          name: "bid",
          type: "input",
          message: "How much would you like to bid?"
        }
      ])
      .then(function(userResponse) {
        // get the information of the chosen item
        var selectedItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.selection) {
            selectedItem = results[i];
          }
        }

        // determine if bid was high enough
        if (selectedItem.highest_bid < parseInt(answer.bid)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                highest_bid: answer.bid
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Bid placed successfully!");
              start();
            }
          );
        }
        else {
          // Option selected was not a valid option - output message and return to start again
          console.log("That selection was not valid please select an option on the menu.");
          start();
        }
      });
  });
}

function addEmployeeToDB() {


}

// tie this into the adding an employee to database Inquirer question block
.then(function(userResponse) {
    connection.query(
        "INSERT INTO employee SET ?",
        {
            action_name: userResponse.action,
            category: userResponse.category,

        },
        // function to add an employee to the database
        function(addEmployee) {
            if (addEmployee) throw addEmployee;
            console.log("Employee was added to the database.");
            // Send user back to make another option selection.
            start();
        }
    );




function addRoleToDB() {
connection.query( {
    if (err) throw err;
    inquirer
      .prompt([
          {
              name: "option"
              type: "rolelist"
              choices: function() {
                var selectionArray = [];
                for (var i = 0; i < results.length; i++) {
                    selectionArray.push(results[i].selection_name);
                  }
                  return selectionArray;
                },
                message: "What employee role would you like to add?"
              },
              {
                name: "userReply",
                type: "input",
                message: "How much would you like to bid? - Should I remove this prompt?"
              }
            ])
            .then(function(userResponse) {
              // get the information of the chosen item
              var selectedItem;
              for (var i = 0; i < results.length; i++) {
                if (results[i].item_name === answer.selection) {
                  selectedItem = results[i];
                }
              }
      
              // determine if bid was high enough
              if (selectedItem.highest_bid < parseInt(answer.bid)) {
                // bid was high enough, so update db, let the user know, and start over
                connection.query(
                  "UPDATE auctions SET ? WHERE ?",
                  [
                    {
                      highest_bid: answer.bid
                    },
                    {
                      id: chosenItem.id
                    }
                  ],
                  function(error) {
                    if (error) throw err;
                    console.log("Bid placed successfully!");
                    start();
                  }
                );
              }
              else {
                // Option selected was not a valid option - output message and return to start again
                console.log("That selection was not valid please select an option on the menu.");
                start();
              }
            }
          }
      ])
});




}

function viewDept() {


}


function viewRoles() {


}

function viewEmployees() {



}


function deleteDept() {




}


function deleteRoles() {


}


function deleteEmployee() {

}



function updateRoles() {


}



// Okay - Plan how the user will interact with my application:
// What do we want them to be able to do?

// So let's first ask the user: "What would you like to do?"

// Option1:
// Add a department, role, or employee to the database

// Option2:
// View a department, role, or employee to the database

// Option3:
// Update employee role

*/
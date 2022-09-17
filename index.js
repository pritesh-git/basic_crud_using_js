const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log('DB connection succeed.');
  else
    console.log(
      'DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2)
    );
});

app.listen(3000, () =>
  console.log('Express server is runnig at port no : 3000')
);

//Get all employees
app.get('/employees', (req, res) => {
  mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//Get an employees
app.get('/employees/:id', (req, res) => {
  mysqlConnection.query(
    'SELECT * FROM Employee WHERE EmpID = ?',
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//Delete an employees
app.delete('/employees/:id', (req, res) => {
  mysqlConnection.query(
    'DELETE FROM Employee WHERE EmpID = ?',
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send('Deleted successfully.');
      else console.log(err);
    }
  );
});

//Insert an employees
app.post('/employees', (req, res) => {
  let emp = req.body;
  //var sql = "INSERT INTO `employee`(`Name`, `EmpCode`, `Salary`) VALUES (?,?,?)";
  // var value =[[emp.Name, emp.EmpCode, emp.Salary]];
  mysqlConnection.query(
    'INSERT INTO `employee`(`Name`, `EmpCode`, `Salary`) VALUES (?,?,?)',
    [emp.Name, emp.EmpCode, emp.Salary],
    function (err, result) {
      if (!err) res.send(result.affectedRows + 'row inserted');
      else console.log(err);
    }
  );
});

//Update an employees
app.put('/employees', function (req, res) {
  mysqlConnection.query(
    'UPDATE `employee` SET `Name`=?,`EmpCode`=?,`Salary`=? where `EmpID`=?',
    [req.body.Name, req.body.EmpCode, req.body.Salary, req.body.EmpID],
    function (error, results, fields) {
      if (!err) res.send(result.affectedRows + 'row Updated');
      else console.log(err);
    }
  );
});

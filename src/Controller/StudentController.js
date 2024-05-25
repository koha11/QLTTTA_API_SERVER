const excStmt = require('../util/excStmt');

const spFunc = require('../util/supportFunction');

class StudentController {
  index(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    excStmt('select * from student').then((value) => {
      console.log(value);
      res.send(JSON.stringify(value));
    });
  }

  //find
  show(req, res, next) {
    const id = req.params.slug;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    excStmt(`select * from student where student_id = '${id}'`).then(
      (value) => {
        if (value.length == 0) res.json([{ 404: 'NOT FOUND ID !!!' }]);
        else res.json(value);
      }
    );
  }

  //update data for table
  update(req, res, next) {
    let input = req.body;
    const updateObj = spFunc.updateDataStr(input);
    console.log(updateObj);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    excStmt(`update student set ${updateObj.set} where ${updateObj.id} `).then(
      (value) => {
        res.send('');
      }
    );
  }

  // insert data for table
  create(req, res, next) {
    let input = req.body;
    const insertObj = spFunc.insertDataStr(input);
    console.log(insertObj);
    excStmt(
      `insert into student(${insertObj.key}) values(${insertObj.value})`
    ).then((value) => {
      console.log(value);
      res.send(`<h1>${value}</h1>`);
    });
  }

  delete(req, res, next) {
    let input = req.body;
    const insertObj = spFunc.insertDataStr(input);
    console.log(insertObj);
    excStmt(
      `insert into student(${insertObj.key}) values(${insertObj.value})`
    ).then((value) => {
      console.log(value);
      res.send(`<h1>${value}</h1>`);
    });
  }

  //get key of table
  keys(req, res, next) {
    excStmt('select * from student', 1).then((value) => {
      console.log(value);
      res.json(value);
    });
  }

  // async show(req, res, next) {
  //   const id = req.params.slug;
  //   const query = `SELECT * FROM STUDENT WHERE STUDENT_ID='${id}'`;
  //   try {
  //     await sql.promises
  //       .query(connectionString, query)
  //       .then((row) => {
  //         if (isObjEmpty(row.first)) res.json({ 404: 'NOT FOUND' });
  //         else res.json(row.first);
  //       })
  //       .catch((err) => console.log(err));
  //   } catch (e) {
  //     console.log(e);
  //     return undefined;
  //   }
  // }
}

module.exports = new StudentController();

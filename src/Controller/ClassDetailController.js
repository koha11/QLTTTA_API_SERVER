const excStmt = require('../util/excStmt');

const spFunc = require('../util/supportFunction');

class ClassDetailController {
  index(req, res, next) {
    excStmt('select * from Class_Detail').then((value) => {
      console.log(value);
      res.send(JSON.stringify(value));
    });
  }

  //find
  show(req, res, next) {
    const id = req.params.slug;
    excStmt(`select * from Class_Detail where class_id = '${id}'`).then(
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
    excStmt(
      `update Class_Detail set ${updateObj.set} where ${updateObj.id}`,
      'post'
    ).then((value) => {
      res.send('done');
    });
  }

  // insert data for table
  create(req, res, next) {
    let input = req.body;
    const insertObj = spFunc.insertDataStr(input);
    console.log(insertObj);
    excStmt(
      `insert into Class_Detail(${insertObj.key}) values(${insertObj.value})`,
      'post'
    ).then((value) => {
      res.send('done');
    });
  }

  delete(req, res, next) {
    let input = req.body;
    let condition = spFunc.deleteDataStr(input);
    console.log(condition);
    excStmt(`delete from Class_Detail where ${condition}`, 'post').then(
      (value) => {
        console.log(value);
        res.send(`done`);
      }
    );
  }

  //get key of table
  keys(req, res, next) {
    excStmt(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'class_Detail'`,
      'get',
      1
    ).then((value) => {
      console.log(value);
      res.json(value);
    });
  }
}

module.exports = new ClassDetailController();

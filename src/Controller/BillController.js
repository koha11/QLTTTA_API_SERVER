const excStmt = require('../util/excStmt');

const spFunc = require('../util/supportFunction');

class BillController {
  index(req, res, next) {
    excStmt('select * from bill').then((value) => {
      console.log(value);
      res.send(JSON.stringify(value));
    });
  }

  //find
  show(req, res, next) {
    const id = req.params.slug;
    excStmt(`select * from bill where bill_id = '${id}'`).then((value) => {
      if (value.length == 0) res.json([{ 404: 'NOT FOUND ID !!!' }]);
      else res.json(value);
    });
  }

  //update data for table
  update(req, res, next) {
    let input = req.body;
    const updateObj = spFunc.updateDataStr(input);
    console.log(updateObj);
    excStmt(
      `update bill set ${updateObj.set} where ${updateObj.id}`,
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
    excStmt(`EXEC PR_BILL_INSERT ${insertObj.value}`, 'post').then((value) => {
      res.send('done');
    });
  }

  delete(req, res, next) {
    let input = req.body;
    let condition = spFunc.deleteDataStr(input);
    console.log(condition);
    excStmt(`delete from bill where ${condition}`, 'post').then((value) => {
      console.log(value);
      res.send(`done`);
    });
  }

  //get key of table
  keys(req, res, next) {
    excStmt(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'bill'`,
      'get',
      1
    ).then((value) => {
      console.log(value);
      res.json(value);
    });
  }

  //ktra HS con no tien hoc phi
  check(req, res, next) {
    excStmt(`PR_BILL_CHECK 1`).then((value) => {
      console.log(value);
      res.send(`done`);
    });
  }

  //Xoa nhung HS no hoc phi qua 7 ngay va hien thi ra
  deleteStudent(req, res, next) {
    excStmt(`PR_BILL_CHECK 0`, 'post').then((value) => {
      console.log(value);
      res.send(`done`);
    });
  }
}

module.exports = new BillController();

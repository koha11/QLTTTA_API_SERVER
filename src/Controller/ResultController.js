const excStmt = require('../util/excStmt');

const spFunc = require('../util/supportFunction');

class ResultController {
  index(req, res, next) {
    excStmt('select * from Result').then((value) => {
      console.log(value);
      res.send(JSON.stringify(value));
    });
  }

  //find
  show(req, res, next) {
    const id = req.params.slug;
    excStmt(`select * from Result where Result_id = '${id}'`).then((value) => {
      if (value.length == 0) res.json([{ 404: 'NOT FOUND ID !!!' }]);
      else res.json(value);
    });
  }

  //update data for table
  update(req, res, next) {
    let input = req.body;
    let updateDataStr = '';
    input.forEach((value) => {
      if (isNaN(value))
        updateDataStr += updateDataStr == '' ? `N'${value}'` : `,N'${value}'`;
      else updateDataStr += `, ${value}`;
    });
    excStmt(`PR_RESULT_UPDATE ${updateDataStr}`, 'post').then((value) => {
      res.send('done');
    });
  }

  // insert data for table
  create(req, res, next) {
    let input = req.body;
    const insertObj = spFunc.insertDataStr(input);
    console.log(insertObj);
    excStmt(
      `insert into Result(${insertObj.key}) values(${insertObj.value})`,
      'post'
    ).then((value) => {
      res.send('done');
    });
  }

  delete(req, res, next) {
    let input = req.body;
    let condition = spFunc.deleteDataStr(input);
    console.log(condition);
    excStmt(`delete from Result where ${condition}`, 'post').then((value) => {
      console.log(value);
      res.send(`done`);
    });
  }

  //get key of table
  keys(req, res, next) {
    excStmt('select * from Result', 1).then((value) => {
      console.log(value);
      res.json(value);
    });
  }
}

module.exports = new ResultController();

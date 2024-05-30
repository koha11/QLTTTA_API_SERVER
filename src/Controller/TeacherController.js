const excStmt = require('../util/excStmt');

const spFunc = require('../util/supportFunction');

class TeacherController {
  index(req, res, next) {
    excStmt('select * from Teacher').then((value) => {
      console.log(value);
      res.send(JSON.stringify(value));
    });
  }

  //find
  show(req, res, next) {
    const id = req.params.slug;
    excStmt(`select * from Teacher where Teacher_id = '${id}'`).then(
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
      `update Teacher set ${updateObj.set} where ${updateObj.id}`,
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
      `insert into Teacher(${insertObj.key}) values(${insertObj.value})`,
      'post'
    ).then((value) => {
      res.send('done');
    });
  }

  delete(req, res, next) {
    let input = req.body;
    let condition = spFunc.deleteDataStr(input);
    console.log(condition);
    excStmt(`delete from Teacher where ${condition}`, 'post').then((value) => {
      console.log(value);
      res.send(`done`);
    });
  }

  //get key of table
  keys(req, res, next) {
    excStmt('select * from Teacher', 1).then((value) => {
      console.log(value);
      res.json(value);
    });
  }
}

module.exports = new TeacherController();

const excStmt = require('../util/excStmt');

const spFunc = require('../util/supportFunction');

class TimetableController {
  index(req, res, next) {
    excStmt(`SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM, MONTH(DATE_START) CLASS_MONTH, YEAR(DATE_START) CLASS_YEAR
         FROM TIMETABLE A
         join CLASS B on A.CLASS_ID = B.CLASS_ID
         join CLASS_DETAIL C on B.CLASS_ID = C.CLASS_ID`).then((value) => {
      console.log(value);
      res.send(JSON.stringify(value));
    });
  }

  //find
  show(req, res, next) {
    const id = req.params.slug;
    excStmt(`select * from Timetable where class_id = '${id}'`).then(
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
      `update Timetable set ${updateObj.set} where ${updateObj.id}`,
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
      `insert into Timetable(${insertObj.key}) values(${insertObj.value})`,
      'post'
    ).then((value) => {
      res.send('done');
    });
  }

  delete(req, res, next) {
    let input = req.body;
    let condition = spFunc.deleteDataStr(input);
    console.log(condition);
    excStmt(`delete from Timetable where ${condition}`, 'post').then(
      (value) => {
        console.log(value);
        res.send(`done`);
      }
    );
  }

  //get key of table
  keys(req, res, next) {
    excStmt(
      `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'timetable'`
    ).then((value) => {
      console.log(value);
      res.json(value);
    });
  }
}

module.exports = new TimetableController();

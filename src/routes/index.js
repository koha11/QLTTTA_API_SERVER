const studentRouter = require('./student');
const timetableRouter = require('./timetable');
const billRouter = require('./bill');
const classRouter = require('./class');
const courseRouter = require('./course');
const resultRouter = require('./result');
const teacherRouter = require('./teacher');
const classDetailRouter = require('./classDetail');

function route(app) {
  app.use('/student', studentRouter);
  app.use('/timetable', timetableRouter);
  app.use('/bill', billRouter);
  app.use('/class', classRouter);
  app.use('/course', courseRouter);
  app.use('/result', resultRouter);
  app.use('/teacher', teacherRouter);
  app.use('/classDetail', classDetailRouter);
}

module.exports = route;

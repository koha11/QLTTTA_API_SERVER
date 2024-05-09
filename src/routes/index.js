const studentRouter = require('./student');
const timetableRouter = require('./timetable');

function route(app) {
  app.use('/student', studentRouter);
  app.use('/timetable', timetableRouter);
}

module.exports = route;

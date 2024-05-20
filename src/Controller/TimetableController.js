// const connectionString =
//   'server=KOHA11\\SQLEXPRESS;Database=QLTTTA;Trusted_Connection=Yes;TrustServerCertificate=Yes;Driver={ODBC Driver 18 for SQL Server}';

// class TimetableController {
//   async index(req, res, next) {
//     const query = `SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM, MONTH(DATE_START) CLASS_MONTH, YEAR(DATE_START) CLASS_YEAR FROM TIMETABLE A join CLASS B on A.CLASS_ID = B.CLASS_ID join CLASS_DETAIL C on B.CLASS_ID = C.CLASS_ID`;
//     try {
//       await sql.promises
//         .query(connectionString, query)
//         .then((rows) => {
//           res.json(rows);
//         })
//         .catch((err) => console.log(err));
//     } catch (e) {
//       console.log(e);
//       return undefined;
//     }
//   }

//   show(req, res, next) {}

//   create(req, res, next) {
//     const formData = req.body;
//     //có thể xử lí dữ liệu ở biến formData r mới thêm vào DB
//   }

//   update(req, res, next) {}
// }

// module.exports = new TimetableController();

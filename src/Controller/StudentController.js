const sql = require('msnodesqlv8');
const isObjEmpty = require('../util/supportFunction');

const connectionString =
  'server=KOHA11\\SQLEXPRESS;Database=QLTTTA;Trusted_Connection=Yes;TrustServerCertificate=Yes;Driver={ODBC Driver 18 for SQL Server}';

class StudentController {
  async index(req, res, next) {
    const query = `SELECT * FROM STUDENT`;
    try {
      await sql.promises
        .query(connectionString, query)
        .then((rows) => {
          res.json(rows.first);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  async show(req, res, next) {
    const id = req.params.slug;
    const query = `SELECT * FROM STUDENT WHERE STUDENT_ID='${id}'`;
    try {
      await sql.promises
        .query(connectionString, query)
        .then((row) => {
          if (isObjEmpty(row.first)) res.json({ 404: 'NOT FOUND' });
          else res.json(row.first);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  create(req, res, next) {
    const formData = req.body;
    //có thể xử lí dữ liệu ở biến formData r mới thêm vào DB
  }

  update(req, res, next) {}

  async getKey(req, res, next) {
    const query = `SELECT * FROM STUDENT`;
    try {
      await sql.promises
        .query(connectionString, query)
        .then((row) => {
          res.json(row.firstMeta);
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
}

module.exports = new StudentController();

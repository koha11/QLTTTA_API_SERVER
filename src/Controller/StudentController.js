const tedious = require('tedious');
const Request = tedious.Request;
const Connection = tedious.Connection;

const excStmt = require('../util/excStmt');

const isObjEmpty = require('../util/supportFunction');

const connectionString =
  'server=KOHA11\\SQLEXPRESS;Database=QLTTTA;Trusted_Connection=Yes;TrustServerCertificate=Yes;Driver={ODBC Driver 18 for SQL Server}';

class StudentController {
  index(req, res, next) {
    const config = {
      server: 'KOHA11',
      authentication: {
        type: 'default',
        options: {
          userName: 'admin1234',
          password: '1',
        },
      },
      options: {
        //port: 61784,
        database: 'QLTTTA',
        instanceName: 'SQLEXPRESS',
        trustServerCertificate: true,
        trustedConnection: true,
      },
    };
    const connection = new Connection(config);
    connection.connect((err) => {
      if (err) {
        console.log('connection err');
        throw err;
      }
    });
    connection.on('connect', async (err) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('Successful connection');
        const request = new Request(
          'select * from student',
          (err, rowCount) => {
            if (err) {
              console.log('error occured!');
              throw err;
            } else {
              //console.log(rowCount);
            }
          }
        );

        let data = [];

        request.on('row', (columns) => {
          data.push(columns);
        });

        setTimeout(() => {
          console.log(data);
          data = data.map((row) => {
            let res = {};
            row.forEach((column) => {
              res[column.metadata.colName] = column.value;
            });
            return res;
          });
          console.log(data);
          res.json(data);
        }, 1000);
        connection.execSql(request);
      }
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

  create(req, res, next) {
    const formData = req.body;
    //có thể xử lí dữ liệu ở biến formData r mới thêm vào DB
  }

  update(req, res, next) {}

  // async getKey(req, res, next) {
  //   const query = `SELECT * FROM STUDENT`;
  //   try {
  //     await sql.promises
  //       .query(connectionString, query)
  //       .then((row) => {
  //         res.json(row.firstMeta);
  //       })
  //       .catch((err) => console.log(err));
  //   } catch (e) {
  //     console.log(e);
  //     return undefined;
  //   }
  // }
}

module.exports = new StudentController();

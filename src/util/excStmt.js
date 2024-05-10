const tedious = require('tedious');
const Request = tedious.Request;
const Connection = tedious.Connection;

function excStmt(sqlString) {
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
  let myPromise;
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
      const request = new Request('select * from class', (err, rowCount) => {
        count = rowCount;
        if (err) {
          console.log('error occured!');
          throw err;
        } else {
          //console.log(rowCount);
          count = rowCount;
        }
      });

      let data = [];

      request.on('row', (columns) => {
        data.push(columns);
      });
      setTimeout(() => {
        console.log(data);
      }, 1000);
      connection.execSql(request);
    }
  });
}

module.exports = excStmt;

const tedious = require('tedious');
const Request = tedious.Request;
const Connection = tedious.Connection;

async function excStmt(sqlString = '', method = 'get', keyOnly = 0) {
  const config = {
    server: 'DB_QLTTTA.mssql.somee.com',
    authentication: {
      type: 'default',
      options: {
        userName: 'koha11_SQLLogin_1',
        password: 'Admin12345@',
      },
    },
    options: {
      //port: 61784,
      database: 'DB_QLTTTA',
      //instanceName: 'SQLEXPRESS',
      trustServerCertificate: true,
      //trustedConnection: true,
    },
  };
  const connection = new Connection(config);
  connection.connect((err) => {
    if (err) {
      console.log('connection err');
      throw err;
    }
  });
  let myPromise = new Promise((resolve) => {
    connection.on('connect', async (err) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('Successful connection');
        const request = new Request(sqlString, (err, rowCount) => {
          if (err) {
            console.log('error occured!');
            throw err;
          } else {
            //console.log(rowCount);
          }
        });

        let data = [];

        request.on('row', (columns) => {
          data.push(columns);
        });

        connection.execSql(request);

        if (method == 'get')
          setTimeout(() => {
            console.log(data);

            if (keyOnly)
              //Neu chi lay key thi tdoi ket qua dau ra
              data = data[0].map((column) => column.metadata.colName);
            else
              data = data.map((row) => {
                //Lap qua tung hang
                let res = {};

                row.forEach((column) => {
                  //Lap qua tung cot cua hang do
                  if (column.metadata.colName.toLowerCase().includes('date'))
                    res[column.metadata.colName] = column.value.toString.slice(
                      0,
                      10
                    );
                  else res[column.metadata.colName] = column.value;
                });

                return res;
              });

            resolve(data);
          }, 1000);
        else resolve(1);
      }
    });
  });

  return await myPromise;
}

module.exports = excStmt;

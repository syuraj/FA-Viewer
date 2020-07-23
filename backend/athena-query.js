const aws = require('aws-sdk')
const AthenaExpress = require('athena-express')

require('dotenv').config()

module.exports.runAthenaQuery = function () {
  const athenaExpressConfig = { aws } //configuring athena-express with aws sdk object
  const athenaExpress = new AthenaExpress(athenaExpressConfig)

  let myQuery = {
    sql: 'SELECT product FROM "fa-viewer-data" LIMIT 100',
    db: 'fa-data' /* optional*/,
  }

  return athenaExpress.query(myQuery).catch((error) => {
    console.log(error)
  })
}

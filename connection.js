const { Client } = require('pg')
require('dotenv').config();

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@psql:${process.env.PGPORT}/${process.env.PGDATABASE}?schema=public`

// const client = new Client({
// 	host: process.env.PGHOST,
// 	user: process.env.PGUSER,
// 	port: process.env.PGPORT,
// 	password: process.env.PGPASSWORD,
// 	database: process.env.PGDATABASE
// })

const client = new Client(
	connectionString, function(err){
		if(err) console.log(err)
	}
)

module.exports = client
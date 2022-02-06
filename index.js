const client = require('./connection.js')
const express = require('express')
const app = express()

let PORT_API = 3300

app.listen(PORT_API, () => {
  console.log(`Server running at: http://localhost:${PORT_API}/`)
})

client.connect()

app.get('/applications', (req, res) => {
  client.query('SELECT * FROM application', (err, result) => {
    if(err){
      throw error
    }
    res.status(200).json(result.rows)
  })
  client.end
})

app.get('/users', (req, res) => {
  client.query('SELECT * FROM user', (err, result) => {
    if(err){
      throw error
    }
    res.status(200).json(result.rows)
  })
  client.end
})
const ConnectMongo = require ('./db');
const express = require('express')
var cors = require('cors') 

ConnectMongo();

const app = express()
const port = 5000

app.use(express.json())

app.use(cors())
app.use(express.json())

// Available routes

app.use('/api/auth',  require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send("Hi from server");
});

app.listen(port, () => {
  console.log(`Socials backend listening at port http://localhost:${port}`)
})





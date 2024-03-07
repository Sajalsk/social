const ConnectMongo = require ('./db');
const express = require('express')
var cors = require('cors') 

ConnectMongo();

const app = express()
const port = 5000

const corsOptions = {
  origin: "https://social-roan-seven.vercel.app",
  method:["POST","GET"],
  credentials: true,
};


app.use(express.json())

app.use(cors(corsOptions));
app.use(express.json())

// Available routes

app.use('/api/auth',  require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hi there from server');
});

app.listen(port, () => {
  console.log(`iNotebook backend listening on port http://localhost:${port}`)
})



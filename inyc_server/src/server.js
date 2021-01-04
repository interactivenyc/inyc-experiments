const express = require('express')
const app = express()
const path = require('path');
const port = 3001;


const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({ extended: true })
)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.get('/test_query', (request, response) => {
  console.log('test_query')

  let q = 'SELECT * FROM data ORDER BY id ASC';
  pool.query(q, (error, results) => {
    if (error) { throw error }
    response.status(200).json(results.rows)
  })
})


const http = app.listen(port, () => {
  console.log('listening today on port:', port);
});

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected id:', socket.id);

  socket.on("test-event", (value) => {
    console.log("test-event received:", value);
    // socket.emit("event-receipt", value) // back to the original sender
    // socket.broadcast.emit("event-receipt", value) // to everyone BUT original sender
    io.emit("event-receipt", value) // to everyone INCLUDING sender
  })

  
});


const Pool = require('pg').Pool
const pool = new Pool({
  host: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'inycdata'
})
const express = require('express')
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
const port = 3001;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3001, () => {
  console.log('listening today on *:3001');
});

const Pool = require('pg').Pool
const pool = new Pool({
  host: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'inycdata'
})

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({ extended: true })
)


app.get('/test_query', (request, response) => {
  console.log('test_query')

  let q = 'SELECT * FROM data ORDER BY id ASC';
  pool.query(q, (error, results) => {
    if (error) { throw error }
    response.status(200).json(results.rows)
  })
})



let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
// Express Route
const employeeRoute = require('./routes/employee.route');

const uri = "mongodb+srv://enver:enver1234*@assignment.lzo0u2g.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/employees', employeeRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})


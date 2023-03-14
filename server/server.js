const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

const db = require('./app/models');

db.sequelize.sync();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/v1/api', (req, res) => {
    res.json({ message: 'Welcome to movielist application.' });
});

require('./app/routes/users.routes')(app);
require('./app/routes/movie.routes')(app);
require('./app/routes/friendList.routes')(app);
require('./app/routes/movieList.routes')(app);


const PORT = process.env.PORT || 8080 
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`) })


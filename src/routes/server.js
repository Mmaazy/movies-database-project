const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

// const dashboard = require('./Routes/dashboard')
// const participants = require('./Routes/participants')
// const university = require('./Routes/university')
// const team = require('./Routes/team')
// const modules = require('./Routes/modules')
// const ambassador = require('./Routes/ambassador')
// const organizer = require('./Routes/organizer')


const loginRoute = require('./loginRoute/loginRoute')
const registerRoute = require('./registerRoute/registerRoute')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

app.get('/', (req, res) => {
    res.send('Visit /api/<path> for desired details')
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

app.use('/api/login', loginRoute);
app.use('/api/register', registerRoute);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const server = app.listen(PORT, (err) => {
    if (err) throw err;

    console.log(`listening to port ${PORT}`)
})
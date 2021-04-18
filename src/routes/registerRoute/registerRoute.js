const express = require('express');
const sql = require('../../db');

const route = express.Router()

// route.get('/', (req, res) => {
//     console.log('here')
//     const {username, password} = req.body;
//     console.log('login hit', username, password)
//     sql.query('SELECT * from movies', (err, result) => {
//         if (err) {
//             return res.status(400).send('Invalid Request')
//         }

//         return res.status(200).send(result)
//     })
// })

route.post('/', (req, res) => {
    const {user, pass, name, cdc, city, country} = req.query;
    // console.log(`register route`,user, pass, name, cdc, city, country);
    sql.query(`insert into user(name, country, city, username, password, cc) values('${name}', '${country}', '${city}', '${user}', '${pass}', ${cdc});`, (err, result) => {
        console.log(err, result)
        if (err) {
            console.log('err')
            return res.status(400).send('Invalid Request')
        }
        return res.status(200).send(result)
    })
})

module.exports = route
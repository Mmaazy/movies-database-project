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
    const {user, pass} = req.query;
    sql.query(`select * from user where username='${user}' and password='${pass}'`, (err, result) => {
        if (result.length < 1) {
            console.log('err')
            return res.status(400).send('Invalid Request')
        }
        return res.status(200).send(result)
    })
})

module.exports = route
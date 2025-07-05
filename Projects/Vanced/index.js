const express = require('express');
const db =require('./config/db.js');
const app = express();

app.listen(3000,() => {
    console.log("app is listening on port 3000");
})


app.get('/users', async(req,res) =>{
    res.send(pool.query('SELECT * FROM User_names', (err,results) => {
        if(err) throw err;
        console.log(results);
    }));
});
const express = require('express');
const path = require('path');
const port = 8000;

const app=express();

//setting template engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res)
{
    // console.log(__dirname);
    // res.send('<h1>Its running now</h1>');
    return res.render('home');
});

app.listen(port, function(err)
{
    if(err)
    {
        console.log("Error in running server ", err);
    }

    console.log("Server is running in port: ", port);
});
const express = require('express');
const port = 8000;

const app=express();


app.get('/', function(req, res)
{
    res.send('<h1>Its running now</h1>');
})

app.listen(port, function(err)
{
    if(err)
    {
        console.log("Error in running server ", err);
    }

    console.log("Server is running in port: ", port);
});
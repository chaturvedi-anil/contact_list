const express = require('express');
const path = require('path');
const port = 8000;

const app=express();

//setting template engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name:"anil",
        phone: "1111111111"
    },
    {
        name: "akash",
        phone: "2222222222"
    }
]

// --------------controlers-------------->
// home controller
app.get('/', function(req, res)
{
    return res.render('home', 
    {
        title: "Contact List",
        contact_list: contactList
    });
});
// practice controller
app.get('/practice', function(req, res)
{
    return res.render('practice', {title: "Practice page"});
});



app.listen(port, function(err)
{
    if(err)
    {
        console.log("Error in running server ", err);
    }

    console.log("Server is running in port: ", port);
});
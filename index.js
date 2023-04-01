const express = require('express');
const path = require('path');
const port = 8000;

const app=express();

//setting template engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// setting body parser middileware
app.use(express.urlencoded());
// setting static files
app.use(express.static('assets'));

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
    // console.log(req);
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

// add contact controller
app.post('/create-contact', function(req, res)
{
    contactList.push(req.body);

    return res.redirect('back');
});

// delete contact controller
app.get('/delete-contact/', function(req, res)
{
    let phone=req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex != -1)
    {
        contactList.splice(contactIndex,1);
    }
     return res.redirect('back');
});



app.listen(port, function(err)
{
    if(err)
    {
        console.log("Error in running server ", err);
    }

    console.log("Server is running in port: ", port);
});
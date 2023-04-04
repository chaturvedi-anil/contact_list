const express = require('express');
const path = require('path');
const port = 8000;

// database
const db=require('./config/mongoose');
// model
const Contact=require('./models/contact');

const app=express();

//setting template engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// setting body parser middileware
app.use(express.urlencoded());
// setting static files
app.use(express.static('assets'));

// --------------controlers-------------->
// home controller
app.get('/', function(req, res)
{
    Contact.find({})
    .then( (contacts)=> 
    {
        return res.render('home', 
        {
            title: "Contact List",
            contact_list: contacts
        });
    })
    .catch((err)=>
    {
        console.log('error in fetching contacts from db');
        return;
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
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    .then( (newContact) => {
        console.log('new contact added in db ', newContact);
        return res.redirect('back');
    }).catch((err) => {
        
        console.log('error in creating contact');
        return;
    });
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
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


// add contact controller
app.post('/create-contact', function(req, res)
{
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    .then( (newContact) => 
    {
        // console.log('new contact added in db ', newContact);
        return res.redirect('back');
    })
    .catch((err) => 
    {
        
        console.log('error in creating contact');
        return;
    });
});

// update contact
app.post('/edit-contact', function(req, res)
{
    let id=req.query.id;
});

// delete contact controller
app.get('/delete-contact/', function(req, res)
{
    // geting id 
    let id=req.query.id;

    Contact.findByIdAndDelete({_id:id})
    .then((data) =>
    {
        console.log('Contact deleted');
        return res.redirect('back');
    })
    .catch((err) =>
    {
        console.log('error in deleting contact', err);
        return;
    })
});



app.listen(port, function(err)
{
    if(err)
    {
        console.log("Error in running server ", err);
    }

    console.log("Server is running in port: ", port);
});
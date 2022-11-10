const express = require('express');
var bodyParser = require('body-parser'); 
 
var path = require('path');
const app = express(); 
app.use(express.json()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
const obj=[       
               
          ]; 
 
const books = [ 
    {title: 'Harry Potter', id: 1}, 
    {title: 'Twilight', id: 2}, 
    {title: 'Lorien Legacies',id: 3} ]
    app.get('/', (req, res) => { 
        res.send('Welcome to REST API with Node.js Tutorial!!'); 
    });

    app.get('/books', (req, res) => { 
        res.send('Welcome to REST API with Node.js Tutorial!!'); 
    });

    app.get('/file', (req, res) => { 
        res.sendFile(path.join(__dirname,"/login.html")); 
    });
    
    app.get('/p', (req,res)=> {     
        res.send(req.query.p);     
     });    
   
    app.post('/data', (req,res)=> {     
        //res.send(req.body.nm);
             sname=req.body.email;
             roll=req.body.mo;
             pass=req.body.psw;

             const obj1=
            {         
                name:sname,         
                mobile: roll,
                pasword: pass     
            };
            obj.push(obj1);     
           res.render('index.ejs',{firstName:sname,lastName:roll });     
        }); 
        app.get('/d', (req,res)=> {     
            res.send(obj);     
         });

    app.listen(8000);
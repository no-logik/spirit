import express from "express";
// we use this module to connect the route path
import {join} from 'path';  
import home from './routes/home.js';
import Event from './routes/event.js';
import Register from './routes/register.js'
import Login from './routes/login.js';
import Connect_data from "./database/connect_db.js";
const app=express();

const port=process.env.PORT || 5000;

// data url
const Data_url='mongodb://localhost:27017/spirit_db';

// data base connection
 Connect_data(Data_url);
// here we are going to use express.static() function
// so that we can render the file of public folder

app.use(express.static(join(process.cwd(),'public')));
app.use(express.urlencoded({extended:false}));

app.set('views','./view')
app.set('view engine','ejs');

// routers for home page content
app.use('/',home);
// router for event page content
app.use('/events', Event);
app.use('/registration', Register);
app.use('/login', Login);

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`);
    
})

require('dotenv').config();
require('./config/mongoose').connect();
const express = require('express');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
})); 
app.use(express.static('assets'));

// importing layouts 
const expressLayouts =  require('express-ejs-layouts');

// using layouts

app.use(expressLayouts);

// extracting stylesheets and scripts for individual pages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// setting view engine as ejs and defining its path
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(PORT,() => console.log(`Server is running on port: ${PORT}`));
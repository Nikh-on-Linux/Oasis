const express = require('express');
const supabase = require('./config/supabaseClient');
const productsRouter = require('./routers/products');
const app = express();

require('dotenv').config();

port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/products', productsRouter);

app.get('/', async(req,res)=>{
    res.redirect('/products');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
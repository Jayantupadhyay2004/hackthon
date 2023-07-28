
const express = require('express');
const Product = require('../models/Product');
const router = express.Router() //mini server -> acts like app



// displaying all the products
router.get('/products' , async(req,res)=>{
    let products = await Product.find({}); //finding the products
    res.render('products/index' , {products});
})

// Display the form to add a new quote
router.get('/products/new', (req, res) => {
    res.render('products/new');
  });

router.post('/products', async (req, res) => {
    const { author, quote } = req.body;
    try {
      await Product.create({ author, quote });
      res.redirect('/products'); 
    } catch (err) {
      console.error(err);
      res.redirect('/products/new'); 
    }
  });

router.get('/products/:id', async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).send('Quote not found.');
      }
      res.render('products/show', { product });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error.');
    }
  });
  



module.exports = router;
const mongoose = require('mongoose');

const Product = require('./models/Product');

const products = [
    {
        author: "Vishnu pandey",
        quote: "For success , work hard"
    },
    {
        author: "Steve Jobs",
        quote: "The only way to do great work is to love what you do."
    },
    {
        author: "Mahatma Gandhi",
        quote: "Be the change that you wish to see in the world."
    },
    {
        author: "Robert Frost",
        quote: "In three words I can sum up everything I've learned about life: it goes on."
    },
    {
        author: "Eleanor Roosevelt",
        quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        author: "Wayne Gretzky",
        quote: "You miss 100% of the shots you don't take."
    },
    {
        author: "Franklin D. Roosevelt",
        quote: "The only thing we have to fear is fear itself"
    },


]

// seeding function
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully")
}

module.exports = seedDB;
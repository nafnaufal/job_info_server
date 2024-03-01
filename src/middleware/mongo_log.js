const mongoose = require('mongoose');
const {mongo_url} = require('../config/database');

const connectToDatabase = (req, res, next) => {
    mongoose.connect(mongo_url)
        .then(() => {
            console.log('mongodb connected');
            next(); 
        })
        .catch(err => {
            console.error('Not Connect:', err);
            next(err);
        });
};

module.exports = connectToDatabase; 
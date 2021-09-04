import mongoose from 'mongoose';
require('dotenv').config();

const dbConnection = mongoose
    .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((db) => console.log('MongoDb is connected'))
    .catch((err) => console.log(err));

module.exports = {
    dbConnection
}
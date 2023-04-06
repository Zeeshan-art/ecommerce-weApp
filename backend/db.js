const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/EcommerceDb").then(
        (data) => {
            console.log(`Database Connected with Server: ${data.connection.host}`);
        }).catch((err) => {
            console.log(err);
            console.log("dabase not connencted");
        });
}

module.exports = connectDB;
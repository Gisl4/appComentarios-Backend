const mongoose = require('mongoose');
require('dotenv').config( { path: 'var.env' });

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_DB, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })

        console.log("Connected database");
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB
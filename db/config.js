const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ditya0504:adi123@cluster0.lqvvoa2.mongodb.net/E-commerce");
devServer: {
    historyApiFallback: true
}
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connnecting to db'));
db.once('open', function () {
    console.log('Successfully connected to database');
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/phoneBook',contactRouter);
// app.get('/',(req,res) => {
//     res.send('welcome');
// })

mongoose.connect('mongodb://fahim:fahim@localhost:27017/PhoneBookDB',
{ useNewUrlParser: true },() => {
    console.log('Connected to mongoDB');
});

app.listen(3000, () => {
    console.log('app listening at port %s', 3000);
});

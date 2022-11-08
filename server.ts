const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const app = express();

// Set up the default mongoose connection
const mongoDB = `mongodb+srv://agnielson:HkUp'9L%3ArD&$ngj%60Q26h@cluster0.notmgra.mongodb.net/test`;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  _id: Schema.Types.ObjectId,
  first_name: String,
  last_name: String
});

// Compile model from schema
const SomeModel = mongoose.model("hsnu.volunteers", SomeModelSchema);


SomeModel.find()
  .countDocuments()
  .then(numProducts => {
    let totalItems = numProducts;
    return SomeModel.find();
    // return Animal.find({ "_id": new mongoose.Types.ObjectId("60b2cb3847c44052a8042203") })
    // .skip((20 - 1) * 20)
    // .limit(20);
  })
  .then(volunteers => {
    console.log("all volunteers:", volunteers);
  })
  .catch(err => {
    console.log(err);
  });

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/api/form', (req, res) => {

//     nodemailer.createTestAccount((err, account) => {
//         const htmlEmail = `
//         <h3>Contact Details</h3>
//         <ul>
//         <li>Name: ${req.body.name}</li>
//         <li>Email: ${req.body.email}</li>
//         </ul>
//         <h3>Message</h3>
//         <p>${req.body.message}</p>
//         `;

//         let transporter = nodemailer.createTransport({
//             host: 'smtp.ethereal.email',
//             port: 587,
//             auth: {
//                 user: 'config',
//                 pass: 'config'
//             }
//         });

//         let mailOptions = {
//             from: 'config',
//             to: 'config',
//             replyTo: 'config',
//             subject: 'New message',
//             text: req.body.message,
//             html: htmlEmail
//         };

//         transporter.sendMail(mailOptions, (err, info) => {
//             if(err){
//                 return console.log(err);
//             }

//             console.log('Message sent: %s', info.message);
//             console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
//         });
//     });

// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}
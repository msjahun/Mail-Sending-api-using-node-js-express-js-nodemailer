var express = require("express");
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


   // POST method route
app.post('/SendEmail', function (req, res) {
    var param_username = req.body.username;
    var param_email = req.body.email;
    var param_message = req.body.message;
   // console.log(req.body);
  //  console.log(param_username +" "+param_email +" "+param_message);
    SendEmail(param_username ,param_email ,param_message);
    res.send('Email sent successfully');
  })


  function SendEmail(
       name,
       email,
       message
  ){
    var nodemailer = require('nodemailer');

    var emailGlobal = 'sample@email.com';
    var passwordGlobal='samplePassword';

    var transporter = nodemailer.createTransport({
    
      host: "smtp.sample.com",
      port:'port number',
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: emailGlobal,
        pass: passwordGlobal
    
      }
    });
    
    var mailOptions = {
      from: emailGlobal,
      to: 'sample@email.com',
      subject: 'New Message received',
      text: message +" "+ "From :"+email+" Name:"+name
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
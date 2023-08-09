// const express = require("express");
// const nodemailer = require("nodemailer");

// const app = express();

// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "subhashkota002@gmail.com", // generated ethereal user
//       pass: "shrutiA1", // generated ethereal password
//     },
// });

// app.post('/mail', (req, res) => {
//     console.log(req.body);
//     var email = req.body.email
//     var message = req.body.message
//     var subject = req.body.subject
//     var name = req.body.name

//     const mailOptions = {
//         from : email,
//         to : "subhashkota002@gmail.com",
//         subject: subject,
//         html: `${name} from ${email} <noreply@${name}.com> <br /><br /> ${message}`
//     }

//     transporter.sendMail(mailOptions, (err, data) => {
//         if(err){
//             res.json({
//                 status:"err"
//             }) 
//             console.log(err)
//             }
//             else {
//                 res.json({
//                     status: "success"
//         })
//             console.log("Email Sent" + data.response)
//         }
//     });
// });

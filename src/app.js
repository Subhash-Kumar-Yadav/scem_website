const express = require("express");
const res = require("express/lib/response");
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const routing = require("./routers/router");
// require("./routers/mailsender");

const app = express();
const port = process.env.PORT || 3000;

// path/Routing
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleWare
app.use(express.static(static_path));
app.use(routing);

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partial_path);

app.post("/send", (req, res) => {
    console.log(req.body)
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "subhashkota002@gmail.com", // generated ethereal user
            pass: "!smtp#123", // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `${req.body.email}`, // sender address
        to: "subhashkota002@gmail.com", // list of receivers
        subject: "Node Contact Request", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.render("contact", { msg: "Email has been sent" });
    });
});

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
});

const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'islem.habibi93@gmail.com', // generated ethereal user
    pass: 'ylaw orda tivp gdbc', // generated ethereal password
  },
});

const sendEmail = async (req, res) => { 
  const { Name,email, subject, message } = req.body;
  console.log (Name,email, subject, message);

  var mailOptions = {
    from: email,
    to: "islem.habibi93@gmail.com",
    subject: subject,
    html:`Name: ${Name}<br/>
          Email:  ${email}<br/>
          MEssage:  ${message}
            `
  };

  const info = await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      //console.log("Email sent successfully!");
      res.status(200)
        .send({message:'Email sent successfully!'})
    }
  });
};

module.exports = { sendEmail };
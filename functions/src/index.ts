import * as functions from "firebase-functions";
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: "travely49@gmail.com",
    pass: "blxsbwavjagygqqs"
  },
});

const sendContactForm = (form: { email: any; packagename: any; name: any; lastname: any; reservation: any; }) => {
  return transport
    .sendMail({
      subject: "Travely package tickets",
      bcc: [`${form.email}`],
      html: `<h3> Summary of your purchase and Tickets </h3>
            <p>${form.packagename}</p>
            <p>Name: ${form.name}</p>
            <p>Last Name: ${form.lastname}</p>
            <p>Reservation number: ${form.reservation}</p>`,

    })
    .then((r: { accepted: any; rejected: any; }) => {
      console.log("Accepted => ", r.accepted)
      console.log("Rejected => ", r.rejected)
  })
  .catch((e: any) => console.log(e))


}

exports.contactForm = functions.https.onRequest((req, res) => {
  if (req.body.secret !== 'firebaseIsCool') {
    res.send('Missing secret');
  return;}
  sendContactForm(req.body);
  res.send("Sending email...");
  return;
});

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//


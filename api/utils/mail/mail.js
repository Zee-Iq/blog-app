const mailer = require('nodemailer')
// console.log('mailer is', mailer)

module.exports = to => {

    // 1. setup smtp
    const smtpTransport = mailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: process.env.SMTP_PORT,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      // 2. send email

      const data = {
          from: SMTP_FROM,
          to: to,
          subject: 'Welcome to our Social Media App',
          html: 'this is our first email'
      }

      smtpTransport.sendMail(data, function(err, response) {

        if (err) {
            console.log(err)
        } else {
            cb()
        }
      })

      // 3. close connection
      smtpTransport.close()
}
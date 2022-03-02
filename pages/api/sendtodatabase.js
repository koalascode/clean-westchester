       
       
       var nodemailer = NodeRequire('nodemailer');

        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cleanwestchester@gmail.com',
            pass: 'PullingChairUnderKevin2022?!'
             }
        });

        var mailOptions = {
        from: 'cleanwestchester@gmail.com',
        to: 'cleanwestchester@gmail.com',
        subject: 'User Email',
        text:  `${name}, ${email}, ${topic}`
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
         } else {
            console.log('Email sent: ' + info.response);
        }
        }); 
var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: 'seaseeyoul@qq.com',
        pass: '131420mgdi!'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

var sendmail = function(html){
    var option = {
        from:"seaseeyoul@qq.com",
        to:"320431822@qq.com",
        subject : '来自node的邮件',
        html : html
    }
    transporter.sendMail(option, function(error, response){
        if(error){
            console.log("fail: " + error);
        }else{
            console.log("success: " + response.messageID);
        }
    });
}

sendmail("邮件内容：<br/>这是来自nodemailer发送的邮件");
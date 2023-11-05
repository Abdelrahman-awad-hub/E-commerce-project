import nodemailer from "nodemailer";
export async function sendEmailService({
    to,
    subject,
    message,
    attachments = [],
} = {}) {
    //configurations
    const transporter = nodemailer.createTransport({
        host: "localhoost",
        port: 587, //587 , 465
        secure: false,
        service: "gmail",
        auth: {
            user: "abdelrahmanawaad92@gmail.com",
            pass: "lazb cpbf jgbh rlun",
        },
        // tls:{
        //   rejectUnauthorized:false
        // }
    });

    const emailInfo = await transporter.sendMail({
        from: "abdelrahmanawad.dev@gamil.com",
        to: to ? to : "",
        subject: subject ? subject : "hello",
        html: message ? message : "",
        attachments,
    });
    console.log(emailInfo);
    if (emailInfo.accepted.length) {
        return true;
    }
    return false;
}

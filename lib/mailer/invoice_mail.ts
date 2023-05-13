// import nodemailer from "nodemailer"

var nodemailer = require("nodemailer")
type VerificationPromise = {
  isAuthenticated: boolean
  sent:boolean
  isClicked?: boolean
  isScaned?: boolean
  isEmailVerified?: boolean
}

type VerificationnRequestType = {
  interface:string,
  url:string
  token:string,
  baseUrl:string
  email: string
}
export const sendPasswordResetRequest = (
  identifier: string,
  url: string,
  token: string,
  baseUrl: string,
  email: string
) => {
  return new Promise<VerificationPromise>((resolve, reject) => {


    const site = baseUrl.replace(/^https?:\/\//, "")

// console.log('-->detect nunll',process.env.EMAIL_SERVER_HOST,process.env.EMAIL_SERVER_PORT,process.env.EMAIL_SERVER_USER, process.env.EMAIL_SERVER_PASSWORD)
    var transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER, // your domain email address
        pass: process.env.EMAIL_SERVER_PASSWORD // your password
      },
      tls:{
        rejectUnauthorized: false,
        ignoreTLS: false,
        requireTLS: true,
        minVersion: 'TLSv1'
    }
    });

    var mailOptions = {
      from: '"ATLP" <admin@thelineproducer.com>',
      to: identifier,
      subject: `Password reset in to ${site}`,
      text: text( url, site, email ),
      html: html( url, site, email ),
    };


    
    transporter.sendMail(
      mailOptions,
      
      (error: any, info:any) => {

        if(info){
          console.log('in mail','---->',token, info)
          return resolve({isAuthenticated: true, sent:true})
        }
        if (error ) {
          console.log("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          return reject(new Error( error.message))
        } 
      }
    )
  }).then(data=> console.log('success sending mail',data)).catch(error=>console.log('error i sending mail',error))
}



// Email HTML body
const html = ( url: string, site: string, email: string ) => {

  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`
  const escapedSite = `${site.replace(/\./g, "&#8203;.")}`

  // Some simple styling options
  const backgroundColor = "#f9f9f9"
  const textColor = "#444444"
  const mainBackgroundColor = "#ffffff"
  const buttonBackgroundColor = "#346df1"
  const buttonBorderColor = "#346df1"
  const buttonTextColor = "#ffffff"

  // Uses tables for layout and inline CSS due to email client limitations
  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>${escapedSite}</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Click link to reset password for <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Proceed to reset</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`
}

// Email text body – fallback for email clients that don't render HTML
const text = ( url: string, site: string, email:string ) => `Password reset to ${site}\n${url}\n\n`



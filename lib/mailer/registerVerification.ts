// import nodemailer from "nodemailer"

var nodemailer = require("nodemailer")
type VerificationPromise = {
  isAuthenticated: boolean
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
export const sendVerificationRequest = (
  identifier: string,
  url: string,
  token: string,
  baseUrl: string,
  email: string
) => {
  return new Promise<VerificationPromise>((resolve, reject) => {

    const server = process.env.EMAIL_SERVER_URL_
    console.log('--==> in mail sending',identifier)
    // baseUrl: baseUrl
    const from = process.env.EMAIL_FROM_
    // Strip protocol from URL and use domain as site name
    const site = baseUrl.replace(/^https?:\/\//, "")

    // const transport = nodemailer.createTransport({server:process.env.EMAIL_SERVER, from:process.env.EMAIL_FROM})

    var transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: false, // true for 465, false for other ports
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
      subject: `Sign in to ${site}`,
      text: text( url, site, email ),
      html: html( url, site, email ),
    };


    
    transporter.sendMail(
      mailOptions,
      (error: any) => {
        if (error ) {
          // logger.error("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          console.log("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          return reject(new Error( error.message))
        }
        console.log('in mail','---->',token)

        return resolve({isAuthenticated: true})
      }
    )
  }).then(data=> console.log('success sending mail')).catch(e=>console.log('error i sendinng mail',e))
}

// Email HTML body
const html = ( url: string, site: string, email: string ) => {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail,{
    //Eve: FemaleUser 
    //Adam: maleUser  
    //} as this is confusing because 
    //it seems
  // like 
  //they are supposed to click on their email address to sign in.
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
        Verify to Sign in as <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Verify</a></td>
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
const text = ( url: string, site: string, email:string ) => `Sign in to ${site}\n${url}\n\n`


export const sendSessionRequest = (
  identifier: string,
  url: string,
  token: string,
  baseUrl: string,
  email: string
) => {
  return new Promise<VerificationPromise>((resolve, reject) => {

    const server = process.env.EMAIL_SERVER_URL_
    console.log('--==> in mail sending',identifier)
    // baseUrl: baseUrl
    const from = process.env.EMAIL_FROM_
    // Strip protocol from URL and use domain as site name
    const site = baseUrl.replace(/^https?:\/\//, "")

    // const transport = nodemailer.createTransport({server:process.env.EMAIL_SERVER, from:process.env.EMAIL_FROM})

    var transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: false, // true for 465, false for other ports
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
      subject: `Sign in to ${site}`,
      text: text1( url, site, email ),
      html: html1( url, site, email ),
    };


    
    transporter.sendMail(
      mailOptions,
      (error: any) => {
        if (error ) {
          // logger.error("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          console.log("SEND_VERIFICATION_EMAIL_ERROR", email, error)
          return reject(new Error( error.message))
        }
        console.log('','---->',token)

        return resolve({isAuthenticated: true})
      }
    )
  }).then(data=> console.log('success sending mail')).catch(e=>console.log('error i sendinng mail',e))
}

// Email HTML body
const html1 = ( url: string, site: string, email: string ) => {

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
        Verify to Sign in as <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}">
            <a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Login</a></td>
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
const text1 = ( url: string, site: string, email:string ) => `Verify Sign up to ${site}\n${url}\n\n`
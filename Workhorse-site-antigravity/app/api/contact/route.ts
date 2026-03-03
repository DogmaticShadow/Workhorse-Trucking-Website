import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, service, message } = await req.json()

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'Workhorse Trucking <noreply@workhorsetruckingalaska.com>',
      to: ['workhorsetrucking1267@gmail.com'],
      replyTo: email,
      subject: `New Inquiry: ${service} — ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <meta charset="utf-8" />
            <meta name="color-scheme" content="light only" />
            <meta name="supported-color-schemes" content="light" />
            <style>
              :root { color-scheme: light only; }
            </style>
          </head>
          <body bgcolor="#111111" style="margin:0;padding:16px;background-color:#111111;font-family:Arial,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#111111" style="background-color:#111111;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
                    <tr>
                      <td>

                        <!-- Header -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td bgcolor="#CC0000" style="background-color:#CC0000;padding:24px 32px;border-radius:12px 12px 0 0;">
                              <p style="margin:0;color:#ffffff;font-size:22px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">Workhorse Trucking</p>
                              <p style="margin:6px 0 0;color:#ffcccc;font-size:13px;font-family:Arial,sans-serif;">New contact form submission</p>
                            </td>
                          </tr>
                        </table>

                        <!-- Body -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td bgcolor="#1a1a1a" style="background-color:#1a1a1a;padding:32px;">

                              <!-- Name -->
                              <p style="margin:0 0 4px;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#888888;font-family:Arial,sans-serif;">Name</p>
                              <p style="margin:0 0 20px;font-size:15px;color:#eeeeee;font-family:Arial,sans-serif;">${firstName} ${lastName}</p>

                              <!-- Email -->
                              <p style="margin:0 0 4px;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#888888;font-family:Arial,sans-serif;">Email</p>
                              <p style="margin:0 0 20px;font-size:15px;font-family:Arial,sans-serif;"><a href="mailto:${email}" style="color:#ff4444;text-decoration:none;">${email}</a></p>

                              <!-- Service -->
                              <p style="margin:0 0 4px;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#888888;font-family:Arial,sans-serif;">Service Requested</p>
                              <p style="margin:0 0 20px;font-size:15px;color:#eeeeee;font-family:Arial,sans-serif;">${service}</p>

                              <!-- Divider -->
                              <table width="100%" cellpadding="0" cellspacing="0" style="margin:4px 0 24px;">
                                <tr><td bgcolor="#333333" style="background-color:#333333;height:1px;font-size:0;line-height:0;">&nbsp;</td></tr>
                              </table>

                              <!-- Message -->
                              <p style="margin:0 0 8px;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;color:#888888;font-family:Arial,sans-serif;">Message</p>
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td bgcolor="#0d0d0d" style="background-color:#0d0d0d;border-left:3px solid #CC0000;border-radius:4px;padding:16px;">
                                    <p style="margin:0;color:#cccccc;font-size:14px;line-height:1.6;white-space:pre-wrap;font-family:Arial,sans-serif;">${message}</p>
                                  </td>
                                </tr>
                              </table>

                            </td>
                          </tr>
                        </table>

                        <!-- Footer -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td bgcolor="#111111" style="background-color:#111111;padding:16px 32px;border-top:1px solid #222222;border-radius:0 0 12px 12px;text-align:center;">
                              <p style="margin:0;font-size:12px;color:#555555;font-family:Arial,sans-serif;">Reply directly to this email to respond to ${firstName}.</p>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Server error:', err)
    return NextResponse.json({ error: 'Server error. Please try again later.' }, { status: 500 })
  }
}

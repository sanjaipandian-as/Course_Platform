const nodemailer = require('nodemailer');

/**
 * Email Service using Nodemailer
 * Sends confirmation emails after successful payment
 */

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

/**
 * Send enrollment confirmation email
 * @param {Object} studentData - Student and enrollment details
 */
const sendEnrollmentConfirmation = async (studentData) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: studentData.email,
      subject: `🎉 Enrollment Confirmation - ${studentData.course}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
            .info-row { display: flex; justify-content: space-between; margin: 10px 0; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #777; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎓 Welcome to Our Course!</h1>
              <p>Your enrollment is confirmed</p>
            </div>
            <div class="content">
              <p>Dear ${studentData.name},</p>
              <p>Congratulations! Your payment has been successfully processed and you are now enrolled in our course.</p>
              
              <div class="info-box">
                <h3>📋 Enrollment Details</h3>
                <div class="info-row">
                  <span class="label">Enrollment ID:</span>
                  <span class="value">${studentData.enrollmentId}</span>
                </div>
                <div class="info-row">
                  <span class="label">Course:</span>
                  <span class="value">${studentData.course}</span>
                </div>
                <div class="info-row">
                  <span class="label">Plan:</span>
                  <span class="value">${studentData.plan}</span>
                </div>
                <div class="info-row">
                  <span class="label">Amount Paid:</span>
                  <span class="value">₹${studentData.amount}</span>
                </div>
                <div class="info-row">
                  <span class="label">Payment ID:</span>
                  <span class="value">${studentData.paymentId}</span>
                </div>
              </div>

              <h3>📱 Next Steps:</h3>
              <ol>
                <li>Join our WhatsApp group for course updates and support</li>
                <li>You will receive course materials within 24 hours</li>
                <li>Check your dashboard for upcoming sessions</li>
              </ol>

              ${studentData.whatsappGroupLink ? `
                <div style="text-align: center;">
                  <a href="${studentData.whatsappGroupLink}" class="button">Join WhatsApp Group</a>
                </div>
              ` : ''}

              <p>If you have any questions, feel free to reach out to our support team.</p>
              
              <div class="footer">
                <p>Thank you for choosing us!</p>
                <p>© ${new Date().getFullYear()} Course Platform. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendEnrollmentConfirmation,
};

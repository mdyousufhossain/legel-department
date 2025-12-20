/* eslint-disable @typescript-eslint/ban-ts-comment */
"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// Gmail SMTP Transporter Configuration
// Uses Gmail App Password for authentication (NOT your regular Gmail password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password (16 characters)
  },
});

// Validation Schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(2, "Last name is required").max(50, "Last name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  honeypot: z.string().max(0), // If this is filled, it's a bot
});

// @ts-ignore
export async function sendEmail(prevState: unknown, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
    honeypot: formData.get("confirm_email"), // Hidden field name
  });

  // 1. Spam Defense: Validation check
  if (!validatedFields.success) {
    return { error: "Invalid fields. Please check your input." };
  }

  const { firstName, lastName, email, message, honeypot } = validatedFields.data;

  // 2. Spam Defense: Honeypot check
  if (honeypot) {
    // Silently fail for bots
    return { success: "Message sent successfully!" };
  }

  try {
    // 3. Send Email via Gmail SMTP
    await transporter.sendMail({
      from: `"Sky Space Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `New Inquiry from ${firstName} ${lastName}`,
      replyTo: email, // Reply directly to the person who submitted the form
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="background: #f9fafb; padding: 15px; border-radius: 8px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #9ca3af;">
            This message was sent from the Sky Space Aviation website contact form.
          </p>
        </div>
      `,
    });

    return { success: "Your message has been sent! We will get back to you soon." };
  } catch (error) {
    console.error("Email sending error:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
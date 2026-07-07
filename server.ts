import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

interface QuoteRequest {
  name: string;
  company?: string;
  email: string;
  type: string;
  brief: string;
}

const quotes: any[] = [];

// Dynamic Nodemailer transporter setup
const getTransporter = () => {
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";

  if (user.endsWith("@gmail.com")) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false // bypass certificate alignment errors in sandboxed environments
    }
  });
};

const transporter = getTransporter();

async function sendInquiryEmails(name: string, company: string, email: string, type: string, brief: string, ticketId: string) {
  const isSmtpConfigured = process.env.SMTP_USER &&
                           process.env.SMTP_PASS &&
                           process.env.SMTP_PASS !== "YOUR_GMAIL_APP_PASSWORD" &&
                           process.env.SMTP_PASS.trim() !== "";

  const adminMailOptions = {
    from: `"Global Shutter Studio" <${process.env.SMTP_USER || "business.globalshutter@gmail.com"}>`,
    to: "business.globalshutter@gmail.com",
    replyTo: email,
    subject: `[New Inquiry] ${ticketId} - ${name} (${type})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #222; border-radius: 12px; background-color: #0b0b0b; color: #ffffff;">
        <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; padding-bottom: 12px; margin-bottom: 20px; font-weight: 800; letter-spacing: 1px;">NEW CREATIVE BRIEF</h2>
        <p style="font-size: 14px;"><strong style="color: #FFB800;">Ticket ID:</strong> <span style="font-family: monospace; font-size: 14px; background: #222; padding: 3px 8px; border-radius: 4px; color: #fff;">${ticketId}</span></p>
        <p style="font-size: 14px;"><strong style="color: #FFB800;">Full Name:</strong> ${name}</p>
        <p style="font-size: 14px;"><strong style="color: #FFB800;">Company:</strong> ${company || "N/A"}</p>
        <p style="font-size: 14px;"><strong style="color: #FFB800;">Client Email:</strong> <a href="mailto:${email}" style="color: #FFB800; text-decoration: underline;">${email}</a></p>
        <p style="font-size: 14px;"><strong style="color: #FFB800;">Project Category:</strong> ${type}</p>
        <div style="margin-top: 25px; padding: 20px; background: #121212; border-left: 4px solid #FFB800; border-radius: 4px;">
          <strong style="color: #FFB800; font-size: 12px; text-transform: uppercase; font-family: monospace; display: block; margin-bottom: 10px;">Visual Target Brief</strong>
          <p style="margin: 0; color: #eee; font-style: italic; font-size: 14px; line-height: 1.6; white-space: pre-line;">${brief}</p>
        </div>
        <p style="margin-top: 35px; font-size: 11px; color: #555; text-align: center; border-top: 1px solid #222; padding-top: 15px;">
          Submitted via Global Shutter Portal • ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  };

  const clientMailOptions = {
    from: `"Global Shutter Studio" <${process.env.SMTP_USER || "business.globalshutter@gmail.com"}>`,
    to: email,
    subject: `Acknowledgement - Creative Brief Registered [${ticketId}]`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 35px; background-color: #0b0b0b; color: #ffffff; border-radius: 12px; border: 1px solid #222;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ffffff; margin: 0; letter-spacing: 4px; font-size: 26px; font-weight: 800;">GLOBAL SHUTTER</h1>
          <p style="font-family: monospace; color: #FFB800; font-size: 10px; margin-top: 5px; text-transform: uppercase; letter-spacing: 3px;">Ad Production & High-End Brand Films</p>
        </div>
        
        <h3 style="color: #ffffff; text-transform: uppercase; font-size: 16px; border-bottom: 1px solid #222; padding-bottom: 15px; letter-spacing: 1px;">THANKS FOR ENQUIRY</h3>
        
        <p style="font-size: 14px; color: #cccccc; line-height: 1.6; font-weight: 300; margin-top: 20px;">
          Hello ${name},
        </p>
        
        <p style="font-size: 14px; color: #cccccc; line-height: 1.6; font-weight: 300;">
          We have successfully received your creative brief and registered it under reference code <strong style="color: #FFB800; font-family: monospace;">${ticketId}</strong>. Our lead director and cinematic treatment team are already analyzing your visual targets.
        </p>
        
        <div style="margin: 25px 0; padding: 20px; background-color: #121212; border: 1px solid #222; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; color: #FFB800; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1px;">Your Registered Inquiry Details</h4>
          <p style="margin: 5px 0; font-size: 13px; color: #aaa;"><strong>Category:</strong> ${type}</p>
          <p style="margin: 10px 0 0 0; font-size: 13px; color: #aaa;"><strong>Brief outline:</strong></p>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #eee; font-style: italic; font-family: sans-serif; white-space: pre-line;">${brief.length > 200 ? brief.substring(0, 200) + "..." : brief}</p>
        </div>
        
        <p style="font-size: 14px; color: #cccccc; line-height: 1.6; font-weight: 300;">
          Thanks for your enquiry, we will reach out to you shortly. Our team is committed to responding with a detailed typographic Director's Treatment within 4 hours.
        </p>
        
        <p style="font-size: 14px; color: #cccccc; line-height: 1.6; font-weight: 300;">
          In the meantime, feel free to explore our active campaigns and storyboards.
        </p>
        
        <p style="margin-top: 40px; font-size: 11px; color: #555; text-align: center; border-top: 1px solid #222; padding-top: 20px;">
          GLOBAL SHUTTER ADVERTISING PRODUCTION<br/>
          HQ: Mumbai, India • business.globalshutter@gmail.com
        </p>
      </div>
    `,
  };

  if (isSmtpConfigured) {
    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(clientMailOptions);
      console.log(`[EMAIL] Real emails successfully sent for ${ticketId} to admin and client.`);
    } catch (error) {
      console.error(`[EMAIL ERROR] Failed to send real SMTP emails for ${ticketId}:`, error);
      throw error;
    }
  } else {
    console.log(`
================================================================================
[SMTP SIMULATOR] EMAIL DISPATCH LOG
================================================================================
To enable real email dispatch, define SMTP_USER and SMTP_PASS in your environment.

[ADMIN INCOMING MAIL]
To: business.globalshutter@gmail.com
Subject: ${adminMailOptions.subject}
Body Snippet:
${name} from "${company || 'N/A'}" has requested a treatment for "${type}".
Brief: ${brief}

[CLIENT ACKNOWLEDGEMENT MAIL]
To: ${email}
Subject: ${clientMailOptions.subject}
Message: Thanks for your enquiry. We will reach out to you shortly.
================================================================================
    `);
    throw new Error("SMTP is not configured on this host (using placeholder credentials).");
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for JSON request bodies
  app.use(express.json());

  // API Routes - Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // API Routes - Submit Quotation Form
  app.post("/api/quotes", async (req, res) => {
    const { name, company, email, type, brief } = req.body as QuoteRequest;

    if (!name || !email || !brief) {
      return res.status(400).json({
        error: "Required fields name, email, and brief are missing."
      });
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `GS-2026-${randomNum}`;

    const newQuote = {
      id: ticketId,
      name,
      company: company || "",
      email,
      type,
      brief,
      createdAt: new Date().toISOString()
    };

    quotes.push(newQuote);

    console.log(`[BACKEND] Captured quotation form: ${ticketId} from ${email}`);

    let emailSent = false;
    let warning = "";

    try {
      await sendInquiryEmails(name, company || "", email, type, brief, ticketId);
      emailSent = true;
    } catch (err: any) {
      console.error(`[EMAIL ROUTE EXCEPTION] Delivery skipped for ticket ${ticketId}:`, err.message);
      warning = err.message || "Email skipped.";
    }

    res.status(201).json({
      success: true,
      ticketId,
      emailSent,
      warning,
      message: "thanks for enquiry we will reach out to you shortly",
      quote: newQuote
    });
  });

  // Serve Vite in development, static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // SPA routing: catch-all returns index.html
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();

// import { Resend } from "resend";

// export async function sendEmail(to,subject,react) {
//     const resend = new Resend(process.env.RESEND_API_KEY || "");

//     try {
//     const data = await resend.emails.send({
//       from: "Finance App <onboarding@resend.dev>",
//       to,
//       subject,
//       react,
//     });

//     return { success: true, data };
//   } catch (error) {
//     console.error("Failed to send email:", error);
//     return { success: false, error };
//   }
// }
import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  // ✅ Force sending only to your verified email during testing
  const verifiedEmail = "shreyaspatil222@nhitm.ac.in";

  try {
    console.log("🔑 RESEND_API_KEY Loaded:", !!process.env.RESEND_API_KEY);
    console.log("📤 Sending email to:", verifiedEmail);

    const { data, error } = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to: verifiedEmail, // ✅ Use your verified email only
      subject,
      react,
    });

    if (error) {
      console.error("❌ Failed to send email:", error);
      return { success: false, error };
    }

    console.log("✅ Email sent successfully:", data);
    return { success: true, data };
  } catch (err) {
    console.error("🔥 Unexpected error while sending email:", err);
    return { success: false, error: err };
  }
}


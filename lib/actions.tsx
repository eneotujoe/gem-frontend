"use server"

import { Resend } from "resend"
import { prayerRequestSchema, SubmitPrayerRequestResult } from "./types"

const resend = new Resend(process.env.RESEND_API_KEY)

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not configured")
}

export async function submitPrayerRequest(
  formData: FormData
): Promise<SubmitPrayerRequestResult> {
  try {
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    const validationResult = prayerRequestSchema.safeParse(rawData)

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]
      return {
        success: false,
        error: firstError?.message ?? "Validation failed",
      }
    }

    const { firstName, lastName, email, phone, message } = validationResult.data

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return {
        success: false,
        error: "Email service is not configured. Please contact support.",
      }
    }

    const submitterName = `${firstName} ${lastName}`.trim()

    const escapeHtml = (text: string): string => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }
      return text.replace(/[&<>"']/g, (char) => map[char] ?? char)
    }

    const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #8B7355; border-bottom: 2px solid #8B7355; padding-bottom: 10px;">
        Prayer Request
      </h2>
      <div style="background-color: #FAF8F5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0 0 10px 0;"><strong>From:</strong> ${escapeHtml(submitterName)}</p>
        <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      </div>
      <div style="background-color: #fff; padding: 20px; border: 1px solid #E8E4DE; border-radius: 8px;">
        <h3 style="color: #333; margin-top: 0;">Prayer Request:</h3>
        <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
      <p style="color: #888; font-size: 12px; margin-top: 20px;">
        This prayer request was submitted to the God's Empire Ministries.
      </p>
    </div>
  `

    const result = await resend.emails.send({
      from: 'info@gemhog.org',
      to: ["gemhog.org@gmail.com"],
      subject: "Prayer Request",
      html: emailHtml,
      replyTo: email,
    })

    if (result.error) {
      console.error("Resend API error:", result.error)
      return {
        success: false,
        error: "Failed to submit prayer request. Please try again.",
      }
    }

    return { success: true }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("Failed to send prayer request email:", errorMessage, error)

    return {
      success: false,
      error: "Failed to submit prayer request. Please try again.",
    }
  }
}

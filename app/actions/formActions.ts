
"use server";

import { Resend } from "resend";
import * as z from "zod";
import { WelcomeEmail } from "../components/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
	success?: boolean;
	error?: string;
	message?: string;
};
export async function submitContactForm(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	try {
		if (!process.env.RESEND_API_KEY) {
			return {
				success: false,
				error: "Email service is not configured yet.",
			};
		}

		const source = String(formData.get("source") ?? "hero");

		if (source === "contact") {
			const contactSchema = z.object({
				name: z.string().trim().min(1, "Please enter your name"),
				email: z.email(),
				message: z.string().trim().min(1, "Please enter a message"),
			});

			const parsed = contactSchema.safeParse(
				Object.fromEntries(formData.entries()),
			);
			if (!parsed.success) {
				return {
					success: false,
					error: "Please fill out your name, email, and message.",
				};
			}

			const { name, email, message } = parsed.data;

			const ownerInbox = process.env.CONTACT_FORM_TO_EMAIL;
			if (ownerInbox) {
				const contactDelivery = await resend.emails.send({
					from: "noreply@contact.relocrm.au",
					to: [ownerInbox],
					subject: `New contact form message from ${name}`,
					text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
				});

				if (contactDelivery.error) {
					console.error("Resend contact delivery error:", contactDelivery.error);
					return {
						success: false,
						error: "Failed to send your message. Please try again.",
					};
				}
			}

			const contact = await resend.contacts.create({
				email: email,
				firstName: name,
				lastName: '',
				unsubscribed: false,
			});

			if (contact.error) {
				console.error("Resend contact error:", contact.error);
				return {
					success: false,
					error: "Failed to add you to the waitlist. Please try again.",
				};
			}

			const contactSegment = await resend.contacts.segments.add({
				email: email, 
				segmentId: '087e053b-cbbe-48ee-bc82-eabe020c9186',
			});

			if (contactSegment.error) {
				console.error("Resend contact segment error:", contactSegment.error);
				return {
					success: false,
					error: "Failed to add you to the waitlist. Please try again.",
				};
			}

			const confirmation = await resend.emails.send({
				from: "onboarding@contact.relocrm.au",
				to: [email],
				subject: "Exciting new, you are on the waitlist for Relo!",
				react: WelcomeEmail({ name, email, message }),
			});

			if (confirmation.error) {
				console.error("Resend confirmation error:", confirmation.error);
				return {
					success: false,
					error: "Failed to send your message. Please try again.",
				};
			}

			return {
				success: true,
				message: "Got it - we'll be in touch.",
			};
		}

		const heroSchema = z.object({
			email: z.email(),
		});

		const parsed = heroSchema.safeParse(Object.fromEntries(formData.entries()));
		if (!parsed.success) {
			return {
				success: false,
				error: "Please enter a valid email address",
			};
		}

		const { email } = parsed.data;
		const { error } = await resend.emails.send({
			from: "noreply@contact.relocrm.au",
			to: [email],
			subject: "Thank you for contacting me",
			react: WelcomeEmail({ name: email.split("@")[0], email, message: "" }),
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				success: false,
				error: "Failed to send email. Please try again.",
			};
		}

		return {
			success: true,
			message: "Success! I'll get back to you as soon as possible.",
		};
	} catch (error) {
		console.error("Server action error:", error);
		return {
			success: false,
			error: "Something went wrong. Please try again.",
		};
	}
}
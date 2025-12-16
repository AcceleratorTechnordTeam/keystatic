import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EMAIL_FROM, EMAIL_SUBJECT, EMAIL_TO } from '../../../app.config';
import { getContactEmailText } from '../../../features/contact/functions/getContactEmailText';
export const resend = new Resend(process.env.RESEND_API_KEY_GMAIL);

export async function POST(request: Request) {
	const { firstName } = await request.json();
	try {
		const { data, error } = await resend.emails.send({
			from: EMAIL_FROM,
			to: [EMAIL_TO],
			subject: EMAIL_SUBJECT,
			text: getContactEmailText(firstName),
		});

		if (error) {
			console.error('❌ Erreur Resend:', error);
			return NextResponse.json({ error }, { status: 500 });
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error('❌ Crash:', error);
		return NextResponse.json(
			{ error: error instanceof Error ? error.message : 'Unknown error' },
			{ status: 500 },
		);
	}
}

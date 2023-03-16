
import { templates } from "../utils/templates";

const API = 'https://emailing-a35v783m9-kevin170597.vercel.app'

export const mailerSend = async (subject: string, filename: string, path: string, template: 'Front' | 'Fullstack') => {
    const req = await fetch(`${API}/emails/mailer/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            subject,
            to: 'kevin170597@gmail.com',
            template: templates.Front('value here'),
            attachments: [{
                filename,
                path
            }]
        })
    });
    const res = await req.json();
    console.log(res);
};
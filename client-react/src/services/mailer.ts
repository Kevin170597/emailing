
import { templates } from "../utils/templates";

export const mailerSend = async (subject: string, filename: string, path: string, template: 'Front' | 'Fullstack') => {
    const req = await fetch('http://localhost:3001/mailer/send', {
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
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const appPass = 'hcbhkvahsuqggcav';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'kevin170597@gmail.com',
        pass: appPass
    }
});

const template = (name: string) => {
    return `<h1>This is a template created by ${name}</h1>`
};

export const mailerSend = async (req: Request, res: Response) => {
    const { subject, to, template, attachments } = req.body;
    try {
        const email = await transporter.sendMail({
            from: '"Kevin Mendoza" <kevin170597@gmail.com>',
            to,
            subject: subject,
            text: '',
            html: template,
            attachments
        });
        res.send(email);
    } catch (error) {
        res.send(error);
    }
};
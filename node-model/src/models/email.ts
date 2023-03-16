import { Schema, model } from 'mongoose';
import { Email } from '../interfaces/email.interface';

const EmailSchema = new Schema<Email>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true
        },
        fileurl: {
            type: String,
            required: true
        },
        owner: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const EmailModel = model('emails', EmailSchema);
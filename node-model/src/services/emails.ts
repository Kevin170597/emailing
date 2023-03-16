import { EmailModel } from "../models/email";
import { Email } from "../interfaces/email.interface";

export const getEmailsService = async () => {
    const response = await EmailModel.find({ status: 'pending'});
    return response;
};

export const getSentEmailsService = async () => {
    const response = await EmailModel.find({ status: 'sent'});
    return response;
};

export const getEmailByIdService = async (id: string) => {
    const response = await EmailModel.find({ _id: id });
    return response;
};

export const getEmailsByUserIdService = async (userid: string) => {
    const response = await EmailModel.find({ owner: userid });
    return response;
};

export const postEmailService = async (email: Email) => {
    const response = await EmailModel.create(email);
    return response;
};

export const updateEmailService = async (id: string, data: any) => {
    const response = await EmailModel.updateOne({ _id: id }, data);
    return response;
};

export const deleteEmailService = async (id: string) => {
    const response = await EmailModel.deleteOne({ _id: id});
    return response;
};
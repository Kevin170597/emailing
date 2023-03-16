import { Request, Response } from 'express';
import { getEmailsService, getSentEmailsService, getEmailByIdService, getEmailsByUserIdService, postEmailService, updateEmailService, deleteEmailService } from '../services/emails';

export const getEmails = async (req: Request, res: Response) => {
    try {
        const response = await getEmailsService();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const getSentEmails = async (req: Request, res: Response) => {
    try {
        const response = await getSentEmailsService();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const getEmailById = async (req: Request, res: Response) => {
    try {
        const response = await getEmailByIdService(req.params.id);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const getEmailsByUserId = async (req: Request, res: Response) => {
    try {
        const response = await getEmailsByUserIdService(req.params.userid);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const postEmail = async (req: Request, res: Response) => {
    try {
        const response = await postEmailService(req.body);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const updateEmail = async (req: Request, res: Response) => {
    try {
        const response = await updateEmailService(req.params.id, req.body);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};

export const deleteEmail = async (req: Request, res: Response) => {
    try {
        const response = await deleteEmailService(req.params.id);
        res.send(response);
    } catch (error) {
        console.log(error);
    }
};
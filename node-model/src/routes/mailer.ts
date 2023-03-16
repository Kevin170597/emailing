import { Router } from 'express';
import { mailerSend } from '../controllers/mailer';

const router = Router();

router.post('/send', mailerSend);

export { router };
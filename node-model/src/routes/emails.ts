import { Router } from 'express';
import { getEmails, getSentEmails, getEmailById, getEmailsByUserId, postEmail, updateEmail, deleteEmail } from '../controllers/emails';

const router = Router();

router.get('/', getEmails);
router.get('/user/:userid', getEmailsByUserId);
router.get('/sent', getSentEmails);

router.get('/:id', getEmailById);

router.post('/', postEmail);

router.patch('/:id', updateEmail);

router.delete('/:id', deleteEmail);


export { router };
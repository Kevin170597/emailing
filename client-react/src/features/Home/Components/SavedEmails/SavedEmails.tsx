import { useState } from 'react';
import { DeleteIcon, LoadingIcon } from '../../../../assets/icons';
import { Email } from '../../../../models';
import { mailerSend, deleteEmail, softDeleteEmail } from '../../../../services';
import './SavedEmails.css';

export const SavedEmails = ({ emails, setEmails, loadingEmails, error }: any) => {
    const [deleteLoading, setDeleteLoading] = useState<string>('');    

    const handleDeleteEmail = async (_id: string) => {
        try {
            setDeleteLoading(_id);
            await deleteEmail(_id);
            let pos = emails.map((e: any) => e._id).indexOf(_id)
            emails.splice(pos, 1);
            setEmails([...emails]);
        } catch (error) {
            console.log(error);
        } finally {
            setDeleteLoading('');
        }
    };

    const handleSoftDeleteEmail = async (_id: string) => {
        try {
            setDeleteLoading(_id);
            await softDeleteEmail(_id);
            let pos = emails.map((e: any) => e._id).indexOf(_id)
            emails.splice(pos, 1);
            setEmails([...emails]);
        } catch (error) {
            console.log(error);
        } finally {
            setDeleteLoading('');
        }
    };

    const handleSendEmails = () => {
        try {
            emails.map(async (email: any) => {
                await mailerSend(email.subject, email.filename, email.fileurl, email.template);
                await handleSoftDeleteEmail(email._id);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='SavedEmails'>
            {error &&
                <p className='error'>Algo salió mal.</p>
            }
            {loadingEmails &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LoadingIcon fill='#999999' />
                </div>
            }
            {emails?.length > 0 &&
                <button className='sendButton' onClick={() => handleSendEmails()}>
                    Enviar a todos
                </button>
            }
            {emails?.length === 0 &&
                <p className='empty'>No hay emails.</p>
            }
            {emails &&
                emails.map((email: Email) =>
                    <div key={email._id} className='emailCard'>
                        <div className='emailData'>
                            <b>{email.name}</b>
                            <p>{email.email}</p>
                            <p className='subject'>{email.subject}</p>
                            <button onClick={() => handleDeleteEmail(email._id)}>
                                {deleteLoading === email._id ?
                                    <LoadingIcon fill='#999999' />
                                    : <DeleteIcon fill='#999999' />
                                }
                            </button>
                        </div>
                        <div className='file'>
                            <p>{email.filename}:</p>
                            <a href={email.fileurl}>{email.fileurl}</a>
                        </div>
                    </div>
                )
            }
        </div>
    )
};
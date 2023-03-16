import { useEffect, useState } from 'react';
import { SaveEmailForm } from '../../features/Home/Components/SaveEmailForm/SaveEmailForm';
import { SavedEmails } from '../../features/Home/Components/SavedEmails/SavedEmails';
import { Email } from '../../models';
import { getEmails } from '../../services';
import './Home.css';

export const Home = () => {
    const [emails, setEmails] = useState<Email[]>();
    const [loadingEmails, setLoadingEmails] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleGetEmails = async () => {
        try {
            setLoadingEmails(true);
            const res = await getEmails();
            setEmails(res.reverse());
        } catch (error) {
            setError(true);
        } finally {
            setLoadingEmails(false);
        }
    };

    useEffect(() => {
        handleGetEmails();
    }, []);

    return (
        <div className='Home'>
            <div className='emails'>
                <SaveEmailForm emails={emails} setEmails={setEmails} />
                <SavedEmails
                    emails={emails}
                    setEmails={setEmails}
                    loadingEmails={loadingEmails}
                    error={error}
                />
            </div>
        </div>
    )
};
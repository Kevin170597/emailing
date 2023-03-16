import { useEffect, useState } from 'react';
import { LoadingIcon } from '../../assets/icons';
import { getSentEmails } from '../../services';
import moment from 'moment';
import './SentEmails.css';

export const SentEmails = () => {
    const [sentEmails, setSentEmails] = useState<any>();
    const [loadingSentEmails, setLoadingSentEmails] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleGetSentEmails = async () => {
        try {
            setLoadingSentEmails(true);
            const res = await getSentEmails();
            setSentEmails(res.reverse());
        } catch (error) {
            setError(true);
        } finally {
            setLoadingSentEmails(false);
        }
    };

    useEffect(() => {
        handleGetSentEmails();
    }, []);

    return (
        <div className="SentEmails">
            {error &&
                <p className='error'>Algo salió mal.</p>
            }
            {loadingSentEmails && !error &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LoadingIcon fill='#999999' />
                </div>
            }
            {!loadingSentEmails && !error &&
                <div className='tableContainer'>
                    <table>
                        <thead className='head'>
                            <tr>
                                <td>Email</td>
                                <td>Asunto</td>
                                <td>Nombre en plantilla</td>
                                <td>url adjunto</td>
                                <td>Nombre de archivo</td>
                                <td>Enviado en</td>
                            </tr>
                        </thead>
                        <tbody>
                            {sentEmails &&
                                sentEmails.map((sent: any) =>
                                    <tr key={sent._id}>
                                        <td>{sent.email}</td>
                                        <td>{sent.subject}</td>
                                        <td>{sent.name}</td>
                                        <td><a href={sent.fileurl}>{sent.fileurl}</a></td>
                                        <td>{sent.filename}</td>
                                        <td>{moment(sent.updatedAt).format('MMMM, D, h:mm a')}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}
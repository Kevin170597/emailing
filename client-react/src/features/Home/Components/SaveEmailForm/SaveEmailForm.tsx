import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoadingIcon } from '../../../../assets/icons';
import { postEmail } from '../../../../services/emails';
import './SaveEmailForm.css';

export const SaveEmailForm = ({ emails, setEmails }: any) => {
    const [postLoading, setPostLoading] = useState<boolean>(false);

    const handlePostEmail = async (data: any) => {
        try {
            setPostLoading(true);
            const res = await postEmail(data);
            setEmails([res, ...emails]);
        } catch (error) {
            console.log(error);
        } finally {
            setPostLoading(false);
        }
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            subject: '',
            name: '',
            fileurl: '',
            filename: '',
            status: 'pending',
            owner: 'a'
        }
    });

    return (
        <form onSubmit={handleSubmit(handlePostEmail)}>
            <b>Guardar Email</b>
            <input
                {...register('email', { required: true })}
                name='email'
                type="text"
                placeholder='Email'
                style={errors.email ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px #414142' }}
            />
            <input
                {...register('subject', { required: true })}
                name='subject'
                type="text"
                placeholder='Asunto'
                style={errors.subject ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px #414142' }}
            />
            <p>Valores de plantilla</p>
            <input
                {...register('name', { required: true })}
                name='name'
                type="text"
                placeholder='Nombre'
                style={errors.name ? { border: 'solid 1px #ec6363' } : { border: 'solid 1px #414142' }}
            />
            <p>Archivo adjunto</p>
            <input
                {...register('fileurl')}
                name='fileurl'
                type="text"
                placeholder='url'
            />
            <input
                {...register('filename')}
                name='filename'
                type="text"
                placeholder='Nombre del archivo'
            />
            <button type='submit'>
                {postLoading ?
                    <LoadingIcon fill='#000' />
                    : 'Guardar'
                }
            </button>
        </form>
    )
};
const API = 'https://emailing-a35v783m9-kevin170597.vercel.app'

export const getEmails = async () => {
    const req = await fetch(`${API}/emails`);
    const res = await req.json();
    //console.log(res);
    return res;
};

export const getSentEmails = async () => {
    const req = await fetch(`${API}/emails/sent`);
    const res = await req.json();
    //console.log(res);
    return res;
};

export const postEmail = async (data: any) => {
    const req = await fetch(`${API}/emails`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const res = await req.json();
    //console.log(res);
    return res;
};

export const deleteEmail = async (_id: string) => {
    const req = await fetch(`${API}/emails/${_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await req.json();
    //console.log(res);
    return res;
};

export const softDeleteEmail = async (_id: string) => {
    const req = await fetch(`${API}/emails/emails/${_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'sent' })
    });
    const res = await req.json();
    //console.log(res);
    return res;
};
import Swal from 'sweetalert2';
import { ACTIVE_CAMPAIGN_CONTACT_URL, ACTIVE_CAMPAIGN_NIEUWSBRIEF_FORM_ID } from 'constant/config';

export const handleSubmit = (e: any, openModal: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('u', ACTIVE_CAMPAIGN_NIEUWSBRIEF_FORM_ID);
    formData.append('f', ACTIVE_CAMPAIGN_NIEUWSBRIEF_FORM_ID);
    formData.append('s', '');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '3');
    formData.append('fullname', e.target[0].value);
    formData.append('email', e.target[1].value);
    fetch(ACTIVE_CAMPAIGN_CONTACT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {
            openModal();
            e.target.reset();
        })
        .catch(() => {
            Swal.fire({
                title: 'Error!',
                text: 'Sorry! Er is een fout opgetreden :(',
                icon: 'error',
                confirmButtonText: 'Close',
            });
        });
};

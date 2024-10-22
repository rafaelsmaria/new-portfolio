export function sendEmail() {
    const email = 'rafaelsmaria02@gmail.com';
    const subject = encodeURIComponent('Vim pelo portfólio');
    const body = encodeURIComponent('Olá, gostaria de entrar em contato.');

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}
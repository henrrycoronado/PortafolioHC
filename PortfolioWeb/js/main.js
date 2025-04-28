
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name && email && message) {
            alert(`¡Gracias por tu mensaje, ${name}!`);
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

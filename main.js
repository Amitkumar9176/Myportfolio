
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh
    responseMessage.classList.remove('hidden');
    setTimeout(() => {
        responseMessage.classList.add('hidden');
    }, 3000);

    form.reset();
});
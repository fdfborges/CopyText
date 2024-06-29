document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        const confirmPwd = document.getElementById('confirm-password').value;
        const errorParagraph = document.getElementById('passwordError');

        if (password !== confirmPwd) {
            errorParagraph.textContent = 'As senhas não coincidem.';
            event.preventDefault(); // Impede o envio do formulário
        } else {
            errorParagraph.textContent = ''; // Limpa a mensagem de erro, caso exista
        }
    });
});

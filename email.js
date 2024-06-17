// Inicialização do EmailJS
emailjs.init('Heitor'); // Substitua 'user_xxxxxxxxx' pelo seu ID de usuário do EmailJS

// Função para enviar o formulário
function enviarEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Envio do email utilizando o método send do EmailJS
    email.send('service_dv6v9ih', 'template_rxn2029', templateParams) // Substitua pelos seus IDs reais
        .then(function(response) {
            alert('Email enviado com sucesso!', response.status, response.text);
        }, function(error) {
            alert('Ocorreu um erro ao enviar o email:', error);
        });
}



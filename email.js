document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("Sm5R3KyVheHelZO4W"); 

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_dv6v9ih'; 
        const templateID = 'template_rxn2029';

        const templateParams = {
            user_name: document.getElementById('name').value,
            user_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        console.log("Template Params:", templateParams);

        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email enviado com sucesso!');
            }, function(error) {
                console.error('FAILED...', error);
                alert('Falha ao enviar o email: ' + JSON.stringify(error));
            });
    });
});

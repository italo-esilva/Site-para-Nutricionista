document.querySelector('.botao-enviar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Validação básica
    if (!nome || !email) {
        alert('Por favor, preencha os campos obrigatórios.');
        return;
    }

    // Aqui você pode fazer algo com os dados, como enviar para um servidor
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Telefone:', telefone);

    alert('Formulário enviado com sucesso!'); // Mensagem de sucesso
});

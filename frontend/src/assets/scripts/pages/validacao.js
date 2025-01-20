// Adiciona um ouvinte de evento para o envio do formulário
document.querySelector("form").addEventListener("submit", function(event) {
    // Obtém o valor do campo de e-mail
    const email = document.querySelector("input[type='email']").value;
    // Obtém o valor do campo de senha
    const senha = document.querySelector("input[type='password']").value;

    // Verifica se o e-mail contém o caractere "@" (se é um e-mail válido)
    if (!email.includes("@")) {
        // Exibe um alerta caso o e-mail não seja válido
        alert("Por favor, insira um e-mail válido.");
        // Impede o envio do formulário caso o e-mail seja inválido
        event.preventDefault(); 
    }

    // Verifica se a senha tem menos de 6 caracteres
    if (senha.length < 6) {
        // Exibe um alerta caso a senha seja muito curta
        alert("A senha deve ter pelo menos 6 caracteres.");
        // Impede o envio do formulário caso a senha seja muito curta
        event.preventDefault();
    }
});
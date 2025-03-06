document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Em breve retornaremos.');
});

// Seleciona todos os botões
const buttons = document.querySelectorAll("button");

// Função para inicializar gradientes animados
buttons.forEach((button) => {
    button.style.background = "linear-gradient(90deg, #2c3e50, #4ca1af, #2c3e50)";
    button.style.backgroundSize = "200% 200%";
    button.style.animation = "wave 3s linear infinite";
});

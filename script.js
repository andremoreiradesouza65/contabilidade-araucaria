document.querySelector("#contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    if (email && message) {
        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Preencha todos os campos.");
    }
});

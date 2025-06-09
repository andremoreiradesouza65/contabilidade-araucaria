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
// JSON das notícias
const noticias = [
  {
    "imagem": "consignado clt.png",
    "titulo": "🌟 Crédito do Trabalhador 🌟",
    "descricao": "O programa Crédito do Trabalhador liberou mais de R$ 3,1 bilhões..."
  },
  {
    "imagem": "IR.png",
    "titulo": "📊 Acompanhe seu IR 2025! 🕵️",
    "descricao": "Após enviar sua declaração, é essencial acompanhar o status..."
  },
  {
    "imagem": "post 12.png",
    "titulo": "📊 Impactos da Reforma Tributária! 🕵️",
    "descricao": "O Simples Nacional será impactado indiretamente pela reforma tributária..."
  },
  {
    "imagem": "noticia 777.png",
    "titulo":  erros fatais",
    "descricao": " Expandir um negócio no Brasil pode ser um grande desafio! Para garantir o sucesso da sua expansão, é fundamental evitar os 7 erros fatais que podem afundar sua empresa. "
  }
];

// Função para criar e inserir as notícias no HTML
function carregarNoticias() {
  const container = document.querySelector('.noticias-container');

  noticias.forEach(noticia => {
    // Criar o elemento da notícia
    const noticiaDiv = document.createElement('div');
    noticiaDiv.classList.add('noticia-item');

    // Criar a imagem
    const img = document.createElement('img');
    img.src = noticia.imagem;
    img.alt = noticia.titulo;

    // Criar o título
    const titulo = document.createElement('h3');
    titulo.textContent = noticia.titulo;

    // Criar a descrição
    const descricao = document.createElement('p');
    descricao.textContent = noticia.descricao;

    // Inserir tudo dentro da div da notícia
    noticiaDiv.appendChild(img);
    noticiaDiv.appendChild(titulo);
    noticiaDiv.appendChild(descricao);

    // Inserir a notícia no container
    container.appendChild(noticiaDiv);
  });
}

// Chamar a função depois que o DOM estiver carregado
document.addEventListener('DOMContentLoaded', carregarNoticias);




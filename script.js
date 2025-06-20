document.addEventListener('DOMContentLoaded', function() {
    // Garante que o script só rode depois que todo o HTML for carregado

    // --- Smooth Scrolling para Links de Navegação ---
    // Faz a rolagem suave para as seções ao clicar nos links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const navLinks = document.querySelector('.nav-links');
            const hamburgerMenu = document.querySelector('.hamburger-menu');

            // Verifica se o link clicado é o link pai de um dropdown
            // E se a largura da tela é menor ou igual a 992px (indicando mobile)
            const isDropdownParent = this.closest('.dropdown') && window.innerWidth <= 992;

            if (isDropdownParent) {
                // Se for o pai do dropdown em mobile, apenas alterna o dropdown
                e.preventDefault(); // Previne a rolagem imediata para a âncora
                this.parentElement.classList.toggle('active'); // Ativa/desativa a classe 'active' no li.dropdown
            } else {
                // Para todos os outros links (incluindo sub-itens do dropdown e links normais)
                e.preventDefault(); // Previne o comportamento padrão do link

                // Rola suavemente até a seção de destino
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Fecha o menu hambúrguer e remove a classe 'active'
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                }
                // Fecha qualquer dropdown aberto também, caso tenha sido clicado um sub-item
                document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    });

    // --- Menu Responsivo (Hamburger) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu
        navLinks.classList.toggle('active');
        // Alterna a classe 'active' para estilizar o ícone do hambúrguer (ex: virar um X)
        hamburgerMenu.classList.toggle('active');

        // Fecha qualquer dropdown aberto quando o menu principal é aberto/fechado
        document.querySelectorAll('.dropdown.active').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // --- Carousel de Depoimentos ---
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-navigation .dot');
    let currentIndex = 0; // Índice do depoimento atual

    // Função para exibir um depoimento específico
    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.classList.remove('active'); // Remove a classe 'active' de todos os depoimentos
            dots[i].classList.remove('active'); // Remove a classe 'active' de todos os pontos
            if (i === index) {
                item.classList.add('active'); // Adiciona 'active' ao depoimento atual
                dots[i].classList.add('active'); // Adiciona 'active' ao ponto correspondente
            }
        });
    }

    // Função para avançar para o próximo depoimento
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length; // Cicla entre os depoimentos
        showTestimonial(currentIndex);
    }

    // Inicia o carrossel automático a cada 7 segundos
    let testimonialInterval = setInterval(nextTestimonial, 7000);

    // Adiciona evento de clique aos pontos de navegação
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(testimonialInterval); // Para o carrossel automático ao clicar em um ponto
            currentIndex = index; // Define o depoimento atual com base no ponto clicado
            showTestimonial(currentIndex);
            testimonialInterval = setInterval(nextTestimonial, 7000); // Reinicia o carrossel automático
        });
    });

    // Exibe o primeiro depoimento ao carregar a página
    showTestimonial(currentIndex);

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');
    const header = document.querySelector('.header'); // Pega o header para ajustar o offset

    // Mostra ou esconde o botão de acordo com a posição da rolagem
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Se a página rolou mais de 300px
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // --- Ativar Link Ativo no Menu ao Rolar ---
    // Adiciona a classe 'active' ao link de navegação correspondente à seção visível
    const sections = document.querySelectorAll('section'); // Todas as seções da página
    // Todos os links de navegação, excluindo os botões e os links pais do dropdown
    const navLinksItems = document.querySelectorAll('.nav-links a:not(.btn-primary)');

    window.addEventListener('scroll', () => {
        let currentSectionId = ''; // Armazena o ID da seção atualmente visível

        sections.forEach(section => {
            const sectionTop = section.offsetTop; // Posição do topo da seção
            const sectionHeight = section.clientHeight; // Altura da seção
            // Calcula a posição de rolagem considerando a altura do header fixo e um offset
            if (pageYOffset >= sectionTop - header.offsetHeight - 50) {
                currentSectionId = section.getAttribute('id'); // Obtém o ID da seção
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active'); // Remove 'active' de todos os links

            // Verifica se o href do link contém o ID da seção atual
            // E se não é o link pai do dropdown (que não deve ficar "ativo" como uma seção)
            if (link.getAttribute('href').includes(currentSectionId) && currentSectionId !== '' && !link.parentElement.classList.contains('dropdown')) {
                link.classList.add('active'); // Adiciona 'active' ao link da seção atual
            }
        });
    });

    // --- Validação básica de formulário de contato ---
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Obtém os valores dos campos obrigatórios
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            // Verifica se os campos obrigatórios estão vazios
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Mensagem).');
                event.preventDefault(); // Impede o envio do formulário se houver campos vazios
            }
            // Você pode adicionar validações mais complexas aqui (ex: formato de e-mail, telefone)
            // if (!isValidEmail(email)) { alert('Email inválido'); event.preventDefault(); }
        });
    }

    // Função de exemplo para validar email (pode ser usada acima)
    function isValidEmail(email) {
        // Regex simples para validação de email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

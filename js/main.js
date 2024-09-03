const hamburguer = document.querySelector('.header-hamburguer');
const nav = document.querySelector('.header-nav');

const toggler = document.querySelector('.navbar-toggler');
const iconBars = toggler.querySelector('.fa-bars');
const iconTimes = toggler.querySelector('.fa-times');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    nav.classList.toggle('active');
});

toggler.addEventListener('click', () => {
    iconBars.style.display = iconBars.style.display === 'none' ? 'block' : 'none';
    iconTimes.style.display = iconTimes.style.display === 'none' ? 'block' : 'none';
});

function trocarImagem(novaImagem) {
    const img = document.querySelector('.img-accordion');
    img.classList.add('fade-out');
    setTimeout(() => {
        img.src = novaImagem;
        img.classList.remove('fade-out');
    }, 400);
}

AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', () => {
        const isExpanded = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('is-active');
        burger.classList.toggle('active');
    });
});

const card1 = document.querySelector('.historia-card-1');
const card2 = document.querySelector('.historia-card-2');
const card3 = document.querySelector('.historia-card-3');
const botaoEscolha1 = document.querySelector('.btn1');
const botaoEscolha2 = document.querySelector('.btn2');
const botaoEscolha3 = document.querySelector('.btn3');

function clickPerformance() {
    card1.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-coin"></i>
            <h5 class="historia-card-titulo">VELOCIDADE E PERFORMANCE</h5>
        </div>
        <p class="historia-card-paragrafo">
            Com a nossa equipe, otimizamos o código e deixamos seu site liso igual sabonete, acessível em
            qualquer dispositivo.
        </p>
    </div>
    `;

    card2.innerHTML = `
        <div class="historia-card-item">
            <div class="historia-card-header">
                <i class="bi bi-coin"></i>
                <h5 class="historia-card-titulo">FOCO NOS RESULTADOS</h5>
            </div>
            <p class="historia-card-paragrafo">
                A DoisDev tem a prioridade e capacidade de entregar resultados que realmente fazem a
                diferença para o seu negócio, transformando simples visitantes em potenciais clientes.
            </p>
        </div>
    `;

    card3.innerHTML = `
    <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-coin"></i>
            <h5 class="historia-card-titulo">SEM ESTRESSE</h5>
        </div>
        <p class="historia-card-paragrafo">
            Com as nossas capacidades, criamos e modificamos seu site para que o cliente não se estresse com algum erro ou travamento na hora de usar, garantindo qualidade e 5 estrelas de contentamento do cliente.
        </p>
    </div>
    `;

    botaoEscolha1.style.backgroundColor='var(--cor-secundaria)'
    botaoEscolha1.style.color='white'

    botaoEscolha2.style.backgroundColor='rgb(246, 246, 246)'
    botaoEscolha2.style.color='var(--cor-secundaria)'
    
    botaoEscolha3.style.backgroundColor='rgb(246, 246, 246)'
    botaoEscolha3.style.color='var(--cor-secundaria)'
}

function clickAlcance() {
    card1.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-bar-chart"></i>
            <h5 class="historia-card-titulo">TRANSFORME A WEB EM SEU ESCRITÓRIO DE VENDAS</h5>
        </div>
        <p class="historia-card-paragrafo">
            Com as DoisDev seu negócio se torna cada vez mais rentável e atraindo ainda mais
            clientes,
            para que sua empresa/negócio cresça ainda mais.
        </p>
    </div>
    `;

    card2.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-bar-chart"></i>
            <h5 class="historia-card-titulo">SUBINDO NO RANKING</h5>
        </div>
        <p class="historia-card-paragrafo">
            Nós nos empenhamos e desenvolvemos seu site com as melhores táticas para um melhor posicionamento e liderar
            as buscas nos navegadores web.
        </p>
    </div>
    `;

    card3.innerHTML = `
    <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-bar-chart"></i>
            <h5 class="historia-card-titulo">DEIXE SUA MARCA REGISTRADA</h5>
        </div>
        <p class="historia-card-paragrafo">
            Com os nossos serviços temos a oportunidade de gerar mais propriedade e autenticidade a sua marca, elevando a sua empresa ao patamar que ela merece.
        </p>
    </div>
    `;

    botaoEscolha2.style.backgroundColor='var(--cor-secundaria)'
    botaoEscolha2.style.color='white'

    botaoEscolha1.style.backgroundColor='rgb(246, 246, 246)'
    botaoEscolha1.style.color='var(--cor-secundaria)'
    
    botaoEscolha3.style.backgroundColor='rgb(246, 246, 246)'
    botaoEscolha3.style.color='var(--cor-secundaria)'
}

function clickQualidade() {
    card1.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-award"></i>
            <h5 class="historia-card-titulo">INVISTA EM TEMPO E QUALIDADE</h5>
        </div>
        <p class="historia-card-paragrafo">
            A DoisDev impulsiona o seu produto e otimiza o seu tempo, simplificando a suas tarefas e contato com os
            clientes, para você focar no que importa e otimizar o seu tempo.
        </p>
    </div>
    `;

    card2.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-award"></i>
            <h5 class="historia-card-titulo">DEMONSTRE QUALIDADE</h5>
        </div>
        <p class="historia-card-paragrafo">
            Assim como só trabalhamos com negócios de qualidade, o seu site precisa manter esse padrão e conosco isso é
            garantido, trazendo novos clientes impressionados com o seu serviço transmitido pela tela dos dispositivo.
        </p>
    </div>
    `;

    card3.innerHTML = `
    <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-award"></i>
            <h5 class="historia-card-titulo">BUSCANDO A PERFEIÇÃO</h5>
        </div>
        <p class="historia-card-paragrafo">
            Temos o objetivo de criar seu site de forma perfeita, unindo suas ideias às nossas e transformando-as em um site incrível e de extrema qualidade, agradando seu cliente em potencial.
        </p>
    </div>
    `;

    botaoEscolha3.style.backgroundColor='var(--cor-secundaria)'
    botaoEscolha3.style.color='white'

    botaoEscolha1.style.backgroundColor='rgb(246, 246, 246)'
    botaoEscolha1.style.color='var(--cor-secundaria)'
    
    botaoEscolha2.style.backgroundColor='rgb(246, 246, 246)'
    botaoEscolha2.style.color='var(--cor-secundaria)'
}
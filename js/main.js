const hamburguer = document.querySelector('.header-hamburguer');
const nav = document.querySelector('.header-nav');
const toggler = document.querySelector('.navbar-toggler');
const iconBars = toggler.querySelector('.fa-bars');
const iconTimes = toggler.querySelector('.fa-times');
const links = document.querySelectorAll('.header-link');

toggler.addEventListener('click', () => {
    iconBars.style.display = iconBars.style.display === 'none' ? 'block' : 'none';
    iconTimes.style.display = iconTimes.style.display === 'none' ? 'block' : 'none';
})

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    nav.classList.toggle('active');
    links.forEach(linkIt => linkIt.style.color = 'var(--cor-secundaria)');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburguer.classList.remove('active');
        iconBars.style.display = 'block';
        iconTimes.style.display = 'none';
    });
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
    const headerLogo = document.querySelector('.header-logo');
    const headerLinks = document.querySelectorAll('.header-link');
    const iconsMenuHeader = document.querySelectorAll('.fas');
    const voltarTopoBtn = document.querySelector('.voltarTopo');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        headerLinks.forEach(link => link.classList.add('scrolled'));
        iconsMenuHeader.forEach(icon => icon.classList.add('scrolled'));
        voltarTopoBtn.classList.add('scrolled');
        headerLogo.src='./assets/logo-azul.svg'
    } else {
        header.classList.remove('scrolled');
        headerLinks.forEach(link => link.classList.remove('scrolled'));
        iconsMenuHeader.forEach(icon => icon.classList.remove('scrolled'));
        voltarTopoBtn.classList.remove('scrolled');
        headerLogo.src='./assets/logo-branco.svg'
    }
});

document.querySelector('.voltarTopo').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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

const resources = {
    en: {
        translation: {
            "headerLink1": "Our purpose",
            "headerLink2": "What we do",
            "headerLink3": "Services",
            "headerLink4": "Contact",
            "tituloPrincipal": "TRANSFORM YOUR ONLINE PRESENCE AND <strong class=\"principal-titulo-strong\">REACH MORE CUSTOMERS</strong>",
            "paragrafoPrincipal": "Boost your business and with our carefully developed strategies to reach your customer and turn clicks into sales.",
            "textoSaberMais": "<button class=\"principal-sabermais\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSd1t9kSHXyuDuIIo45l06cWc2uIBfJJNyYwLB20L8vMkGEp5Q/viewform?usp=sharing\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSd1t9kSHXyuDuIIo45l06cWc2uIBfJJNyYwLB20L8vMkGEp5Q/viewform?usp=sharing\" class=\"principal-sabermais-link\"><span>MAKE YOUR BUDGET</span></a><i class=\"bi bi-pencil-square icon-card-principal \"></i></button>",
            "tituloProposito": "OUR PURPOSE",
            "paragrafoProposito": "DoisDev was founded to help companies and service providers use technology to their advantage. We focus on creating websites that boost and strengthen your business, providing greater visibility and credibility. A well-designed website attracts more clients and makes life easier for both the client and the company or service provider. In today's scenario, where technology plays a central role in our lives, we are ready to update your business and connect it to the modern world.",
            "tituloEscolhaCerta": "<h4 class=\"historia-container-titulo\">WHAT MAKES US<strong class=\"historia-container-titulo-strong\">THE RIGHT CHOICE</strong>FOR YOUR BUSINESS <button class=\"border-0 bg-transparent historia-container-icon\"></h4>",
            "performanceBtn": "Performance",
            "performance_title": "SPEED AND PERFORMANCE",
            "performance_desc": "With our team from the best web development agency in Feira de Santana, we optimize the code and make your site as smooth as soap, accessible on any device.",
            "results_title": "FOCUS ON RESULTS",
            "results_desc": "DoisDev has the priority and capability to deliver results that truly make a difference for your business, turning simple visitors into potential customers.",
            "noStress_title": "NO STRESS",
            "noStress_desc": "With our capabilities, we create and modify your site so that the client doesn't stress over any errors or crashes during use, ensuring quality and 5-star customer satisfaction.",
            "alcanceBtn": "Reach",
            "alcance_title1": "TRANSFORM THE WEB INTO YOUR SALES OFFICE",
            "alcance_desc1": "With DoisDev, your business becomes increasingly profitable and attracts more customers, allowing your company/business to grow even more.",
            "alcance_title2": "CLIMBING THE RANKING",
            "alcance_desc2": "We strive and develop your site with the best tactics for better positioning and leading web searches.",
            "alcance_title3": "LEAVE YOUR MARK",
            "alcance_desc3": "With our services, we have the opportunity to generate more ownership and authenticity for your brand, elevating your company to the level it deserves.",
            "qualidadeBtn": "Quality",
            "qualidade_title1": "INVEST IN TIME AND QUALITY",
            "qualidade_desc1": "DoisDev boosts your product and optimizes your time, simplifying your tasks and contact with clients so you can focus on what matters and optimize your time.",
            "qualidade_title2": "SHOW QUALITY",
            "qualidade_desc2": "Just as we only work with quality businesses, your site needs to maintain this standard, which we guarantee, bringing new clients impressed with your service conveyed through the screen of their devices.",
            "qualidade_title3": "SEEKING PERFECTION",
            "qualidade_desc3": "Our goal is to create your site perfectly, combining your ideas with ours and transforming them into an amazing and high-quality site, pleasing your potential client.",
            "tiposTitulo": "WHAT WE DO",
            "tituloLanding": "I WANT A LANDING PAGE",
            "tituloCorporativo": "I WANT A CORPORATE WEBSITE",
            "tituloECommerce": "I WANT A E-COMMERCE",
            "tituloCampanhas": "I WANT A CAMPAIGN WEBSITE",
            "paragrafoLanding": "A landing page is a single page that presents a service or business in a direct way, helping you to get to know it quickly and encouraging actions such as getting in touch or trying out the service.",
            "paragrafoCorporativo": "A corporate website is a style of website that officially represents a company, offering information about its products, services, values and team. It serves as a point of contact for clients and partners, helping to build credibility and facilitate communication.",
            "paragrafoECommerce": "An e-commerce is an online store where you can buy products or services directly over the internet. It offers a convenient shopping experience, allowing you to explore, choose and pay for items without leaving your home, with delivery options directly to your door.",
            "paragrafoCampanhas": "A campaign website is a page dedicated to promoting a specific initiative, such as a marketing or fundraising campaign. It is designed to engage visitors, inform them about the cause or product, and encourage actions such as donations, subscriptions or shares.",
            "tipoButtonSaibaMaisLanding": "Read more",
            "tipoButtonSaibaMaisCorporativo": "Read more",
            "tipoButtonSaibaMaisECommerce": "Read more",
            "tipoButtonSaibaMaisCampanha": "Read more",
            "tipoButtonFecharLanding": "Close window",
            "tipoButtonFecharCorporativo": "Close window",
            "tipoButtonFecharECommerce": "Close window",
            "tipoButtonFecharCampanhas": "Close window",
            "botaoEntreContato": "CONTACT US",
            "tituloServicos": "OUR SERVICES",
            "contatoTitulo": "CONTACT",
            "contatoTituloCard1": "Where to find us...",
            "contatoParagrafoCard1": "We are located right here on your device, easy and simple to find... <i class=\"bi bi-emoji-wink\">",
            "contatoTituloCard2": "Contact us here",
            "textoFooter": "2024 DoisDev. All rights reserved.",
        }
    },
    pt: {
        translation: {
            "headerLink1": "Nosso propósito",
            "headerLink2": "O que fazemos",
            "headerLink3": "Serviços",
            "headerLink4": "Contato",
            "tituloPrincipal": "TRANSFORME SUA PRESENÇA ONLINE E <strong class=\"principal-titulo-strong\">ALCANCE MAIS CLIENTES</strong>",
            "paragrafoPrincipal": "Impulsione seu negócio e aumente seu alcance com as nossas estratégias minuciosamente desenvolvidas para atingir o seu cliente e transformar cliques em vendas.",
            "textoSaberMais": "<button class=\"principal-sabermais\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSd1t9kSHXyuDuIIo45l06cWc2uIBfJJNyYwLB20L8vMkGEp5Q/viewform?usp=sharing\"><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSd1t9kSHXyuDuIIo45l06cWc2uIBfJJNyYwLB20L8vMkGEp5Q/viewform?usp=sharing\" class=\"principal-sabermais-link\"><span>FAÇA SEU ORÇAMENTO</span></a><i class=\"bi bi-pencil-square icon-card-principal \"></i></button>",
            "tituloProposito": "NOSSO PROPÓSITO",
            "paragrafoProposito": "A DoisDev surgiu com o propósito de ajudar empresas e prestadores de serviços a aproveitarem a tecnologia a seu favor. Focamos na criação de sites que impulsionam e fortalecem o seu negócio, proporcionando maior visibilidade e credibilidade. Um site bem elaborado atrai mais clientes e facilita a vida tanto do cliente quanto da empresa ou prestador de serviços. No cenário atual, em que a tecnologia desempenha um papel central em nossas vidas, estamos prontos para atualizar o seu negócio e conectá-lo ao mundo moderno.",
            "tituloEscolhaCerta": "<h4 class=\"historia-container-titulo\">O QUE NOS TORNA A<strong class=\"historia-container-titulo-strong\">ESCOLHA CERTA</strong>PARA O SEU NEGÓCIO <button class=\"border-0 bg-transparent historia-container-icon\"></h4>",
            "performanceBtn": "Performance",
            "performance_title": "VELOCIDADE E PERFORMANCE",
            "performance_desc": "Com a nossa equipe da melhor agência de desenvolvimento web de Feira de Santana, otimizamos o código e deixamos seu site liso igual sabonete, acessível em qualquer dispositivo.",
            "results_title": "FOCO NOS RESULTADOS",
            "results_desc": "A DoisDev tem a prioridade e capacidade de entregar resultados que realmente fazem a diferença para o seu negócio, transformando simples visitantes em potenciais clientes.",
            "noStress_title": "SEM ESTRESSE",
            "noStress_desc": "Com as nossas capacidades, criamos e modificamos seu site para que o cliente não se estresse com algum erro ou travamento na hora de usar, garantindo qualidade e 5 estrelas de contentamento do cliente.",
            "alcanceBtn": "Alcance",
            "alcance_title1": "TRANSFORME A WEB EM SEU ESCRITÓRIO DE VENDAS",
            "alcance_desc1": "Com a DoisDev seu negócio se torna cada vez mais rentável e atraindo ainda mais clientes, para que sua empresa/negócio cresça ainda mais.",
            "alcance_title2": "SUBINDO NO RANKING",
            "alcance_desc2": "Nós nos empenhamos e desenvolvemos seu site com as melhores táticas para um melhor posicionamento e liderar as buscas nos navegadores web.",
            "alcance_title3": "DEIXE SUA MARCA REGISTRADA",
            "alcance_desc3": "Com os nossos serviços temos a oportunidade de gerar mais propriedade e autenticidade a sua marca, elevando a sua empresa ao patamar que ela merece.",
            "qualidadeBtn": "Qualidade",
            "qualidade_title1": "INVISTA EM TEMPO E QUALIDADE",
            "qualidade_desc1": "A DoisDev impulsiona o seu produto e otimiza o seu tempo, simplificando a suas tarefas e contato com os clientes, para você focar no que importa e otimizar o seu tempo.",
            "qualidade_title2": "DEMONSTRE QUALIDADE",
            "qualidade_desc2": "Assim como só trabalhamos com negócios de qualidade, o seu site precisa manter esse padrão e conosco isso é garantido, trazendo novos clientes impressionados com o seu serviço transmitido pela tela dos dispositivos.",
            "qualidade_title3": "BUSCANDO A PERFEIÇÃO",
            "qualidade_desc3": "Temos o objetivo de criar seu site de forma perfeita, unindo suas ideias às nossas e transformando-as em um site incrível e de extrema qualidade, agradando seu cliente em potencial.",
            "tiposTitulo": "O QUE FAZEMOS",
            "tituloLanding": "QUERO UMA LANDING PAGE",
            "tituloCorporativo": "QUERO UM SITE CORPORATIVO",
            "tituloECommerce": "QUERO UMA LOJA VIRTUAL",
            "tituloCampanhas": "QUERO UM SITE PARA CAMPANHA",
            "paragrafoLanding": "Uma landing page é uma página única que apresenta um serviço ou negócio de forma direta, ajudando você a conhecê-lo rapidamente e incentivando ações como entrar em contato ou experimentar o serviço.",
            "paragrafoCorporativo": "Um site corporativo é um estilo de site que representa oficialmente uma empresa, oferecendo informações sobre seus produtos, serviços, valores e equipe. Ele serve como um ponto de contato para clientes e parceiros, ajudando a construir credibilidade e facilitar a comunicação.",
            "paragrafoECommerce": "Uma loja virtual é uma loja online onde você pode comprar produtos ou serviços diretamente pela internet. Ele oferece uma experiência de compra conveniente, permitindo que você explore, escolha e pague por itens sem sair de casa, com opções de entrega diretamente na sua porta.",
            "paragrafoCampanhas": "Um site para campanhas é uma página dedicada a promover uma iniciativa específica, como uma campanha de marketing ou arrecadação de fundos. Ele é projetado para engajar visitantes, informar sobre a causa ou produto, e incentivar ações como doações, assinaturas ou compartilhamentos.",
            "tipoButtonSaibaMaisLanding": "Saiba Mais",
            "tipoButtonSaibaMaisCorporativo": "Saiba Mais",
            "tipoButtonSaibaMaisECommerce": "Saiba Mais",
            "tipoButtonSaibaMaisCampanha": "Saiba Mais",
            "tipoButtonFecharLanding": "Fechar janela",
            "tipoButtonFecharCorporativo": "Fechar janela",
            "tipoButtonFecharECommerce": "Fechar janela",
            "tipoButtonFecharCampanhas": "Fechar janela",
            "botaoEntreContato": "ENTRE EM CONTATO",
            "tituloServicos": "NOSSOS SERVIÇOS",
            "contatoTitulo": "CONTATO",
            "contatoTituloCard1": "Onde nos encontrar...",
            "contatoParagrafoCard1": "Estamos localizados exatamente aqui, no seu dipositivo, fácil e simples de nos achar... <i class=\"bi bi-emoji-wink\">",
            "contatoTituloCard2": "Nos contate por aqui",
            "textoFooter": "2024 DoisDev. Todos os direitos reservados.",
        }
    }
};


i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        resources: resources,
        lng: "pt",
        fallbackLng: "pt",
        debug: true,
        interpolation: {
            escapeValue: false
        }
    }, function (err, t) {
        if (err) return console.error(err);
        updateContent();
    });

function updateContent() {
    const headerLink1 = document.querySelector('.header-link1');
    headerLink1.innerHTML = i18next.t('headerLink1');

    const headerLink2 = document.querySelector('.header-link2');
    headerLink2.innerHTML = i18next.t('headerLink2');

    const headerLink3 = document.querySelector('.header-link3');
    headerLink3.innerHTML = i18next.t('headerLink3');

    const headerLink4 = document.querySelector('.header-link4');
    headerLink4.innerHTML = i18next.t('headerLink4');

    const tituloPrincipal = document.querySelector('.principal-titulo');
    tituloPrincipal.innerHTML = i18next.t('tituloPrincipal');

    const paragrafoPrincipal = document.querySelector('.principal-paragrafo');
    paragrafoPrincipal.innerHTML = i18next.t('paragrafoPrincipal');

    const textoSaberMais = document.querySelector('.principal-sabermais');
    textoSaberMais.innerHTML = i18next.t('textoSaberMais');

    const tituloProposito = document.querySelector('.historia-titulo');
    tituloProposito.innerHTML = i18next.t('tituloProposito');

    const paragrafoProposito = document.querySelector('.historia-paragrafo');
    paragrafoProposito.innerHTML = i18next.t('paragrafoProposito');

    const tituloEscolhaCerta = document.querySelector('.historia-container-titulo');
    tituloEscolhaCerta.innerHTML = i18next.t('tituloEscolhaCerta');

    const performanceBtn = document.querySelector('.btnPerformance');
    performanceBtn.innerHTML = i18next.t('performanceBtn');

    const performance_title = document.querySelector('.titulo-performance1');
    performance_title.innerHTML = i18next.t('performance_title');

    const performance_desc = document.querySelector('.performance-1');
    performance_desc.innerHTML = i18next.t('performance_desc');

    const results_title = document.querySelector('.titulo-performance2');
    results_title.innerHTML = i18next.t('results_title');

    const results_desc = document.querySelector('.performance-2');
    results_desc.innerHTML = i18next.t('results_desc');

    const noStress_title = document.querySelector('.titulo-performance3');
    noStress_title.innerHTML = i18next.t('noStress_title');

    const noStress_desc = document.querySelector('.performance-3');
    noStress_desc.innerHTML = i18next.t('noStress_desc');

    const alcanceBtn = document.querySelector('.btnAlcance');
    alcanceBtn.innerHTML = i18next.t('alcanceBtn');

    const qualidadeBtn = document.querySelector('.btnQualidade');
    qualidadeBtn.innerHTML = i18next.t('qualidadeBtn');

    const botaoEntreContato = document.querySelector('.historia-card-botao-contato-link-texto');
    botaoEntreContato.innerHTML = i18next.t('botaoEntreContato');

    const tiposTitulo = document.querySelector('.tipos-titulo');
    tiposTitulo.innerHTML = i18next.t('tiposTitulo');

    const tituloLanding = document.querySelector('.titulo-landing');
    tituloLanding.innerHTML = i18next.t('tituloLanding');

    const tituloCorporativo = document.querySelector('.titulo-corporativo');
    tituloCorporativo.innerHTML = i18next.t('tituloCorporativo');

    const tituloECommerce = document.querySelector('.titulo-e-commerce');
    tituloECommerce.innerHTML = i18next.t('tituloECommerce');

    const tituloCampanhas = document.querySelector('.titulo-campanhas');
    tituloCampanhas.innerHTML = i18next.t('tituloCampanhas');
    
    const paragrafoLanding = document.querySelector('.paragrafo-landing');
    paragrafoLanding.innerHTML = i18next.t('paragrafoLanding');

    const paragrafoCorporativo = document.querySelector('.paragrafo-corporativo');
    paragrafoCorporativo.innerHTML = i18next.t('paragrafoCorporativo');

    const paragrafoECommerce = document.querySelector('.paragrafo-e-commerce');
    paragrafoECommerce.innerHTML = i18next.t('paragrafoECommerce');

    const paragrafoCampanhas = document.querySelector('.paragrafo-campanhas');
    paragrafoCampanhas.innerHTML = i18next.t('paragrafoCampanhas');

    const tipoButtonSaibaMaisLanding = document.querySelector('.container-tipo-button-landing');
    tipoButtonSaibaMaisLanding.innerHTML = i18next.t('tipoButtonSaibaMaisLanding');
    
    const tipoButtonSaibaMaisCorporativo = document.querySelector('.container-tipo-button-corporativo');
    tipoButtonSaibaMaisCorporativo.innerHTML = i18next.t('tipoButtonSaibaMaisCorporativo');
    
    const tipoButtonSaibaMaisECommerce = document.querySelector('.container-tipo-button-e-commerce');
    tipoButtonSaibaMaisECommerce.innerHTML = i18next.t('tipoButtonSaibaMaisECommerce');
    
    const tipoButtonSaibaMaisCampanha = document.querySelector('.container-tipo-button-campanha');
    tipoButtonSaibaMaisCampanha.innerHTML = i18next.t('tipoButtonSaibaMaisCampanha');

    const tipoButtonFecharLanding = document.querySelector('.botaoFecharLanding');
    tipoButtonFecharLanding.innerHTML = i18next.t('tipoButtonFecharLanding');

    const tipoButtonFecharCorporativo = document.querySelector('.botaoFecharCorporativo');
    tipoButtonFecharCorporativo.innerHTML = i18next.t('tipoButtonFecharCorporativo');

    const tipoButtonFecharECommerce = document.querySelector('.botaoFecharECommerce');
    tipoButtonFecharECommerce.innerHTML = i18next.t('tipoButtonFecharECommerce');

    const tipoButtonFecharCampanhas = document.querySelector('.botaoFecharCampanhas');
    tipoButtonFecharCampanhas.innerHTML = i18next.t('tipoButtonFecharCampanhas');

    const tituloServicos = document.querySelector('.servicos-titulo');
    tituloServicos.innerHTML = i18next.t('tituloServicos');

    const contatoTitulo = document.querySelector('.contato-titulo');
    contatoTitulo.innerHTML = i18next.t('contatoTitulo');

    const contatoTituloCard1 = document.querySelector('.titulo-contato1');
    contatoTituloCard1.innerHTML = i18next.t('contatoTituloCard1');

    const contatoParagrafoCard1 = document.querySelector('.contato-frase-subtitulo');
    contatoParagrafoCard1.innerHTML = i18next.t('contatoParagrafoCard1');

    const contatoTituloCard2 = document.querySelector('.titulo-contato2');
    contatoTituloCard2.innerHTML = i18next.t('contatoTituloCard2');

    const textoFooter = document.querySelector('.texto-footer');
    textoFooter.innerHTML = i18next.t('textoFooter');
}

document.getElementById('btn-pt').addEventListener('click', function () {
    i18next.changeLanguage('pt', updateContent);
});

document.getElementById('btn-en').addEventListener('click', function () {
    i18next.changeLanguage('en', updateContent);
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
            <h5 class="historia-card-titulo">${i18next.t('performance_title')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('performance_desc')}
        </p>
    </div>
    `;

    card2.innerHTML = `
        <div class="historia-card-item">
            <div class="historia-card-header">
                <i class="bi bi-coin"></i>
                <h5 class="historia-card-titulo">${i18next.t('results_title')}</h5>
            </div>
            <p class="historia-card-paragrafo">
                ${i18next.t('results_desc')}
            </p>
        </div>
    `;

    card3.innerHTML = `
    <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-coin"></i>
            <h5 class="historia-card-titulo">${i18next.t('noStress_title')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('noStress_desc')}
        </p>
    </div>
    `;

    botaoEscolha1.style.backgroundColor = 'var(--cor-secundaria)';
    botaoEscolha1.style.color = 'white';

    botaoEscolha2.style.backgroundColor = 'rgb(246, 246, 246)';
    botaoEscolha2.style.color = 'var(--cor-secundaria)';

    botaoEscolha3.style.backgroundColor = 'rgb(246, 246, 246)';
    botaoEscolha3.style.color = 'var(--cor-secundaria)';
}

function clickAlcance() {
    card1.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-bar-chart"></i>
            <h5 class="historia-card-titulo">${i18next.t('alcance_title1')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('alcance_desc1')}
        </p>
    </div>
    `;

    card2.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-bar-chart"></i>
            <h5 class="historia-card-titulo">${i18next.t('alcance_title2')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('alcance_desc2')}
        </p>
    </div>
    `;

    card3.innerHTML = `
    <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-bar-chart"></i>
            <h5 class="historia-card-titulo">${i18next.t('alcance_title3')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('alcance_desc3')}
        </p>
    </div>
    `;

    botaoEscolha2.style.backgroundColor = 'var(--cor-secundaria)';
    botaoEscolha2.style.color = 'white';

    botaoEscolha1.style.backgroundColor = 'rgb(246, 246, 246)';
    botaoEscolha1.style.color = 'var(--cor-secundaria)';

    botaoEscolha3.style.backgroundColor = 'rgb(246, 246, 246)';
    botaoEscolha3.style.color = 'var(--cor-secundaria)';
}

function clickQualidade() {
    card1.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-award"></i>
            <h5 class="historia-card-titulo">${i18next.t('qualidade_title1')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('qualidade_desc1')}
        </p>
    </div>
    `;

    card2.innerHTML = `
        <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-award"></i>
            <h5 class="historia-card-titulo">${i18next.t('qualidade_title2')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('qualidade_desc2')}
        </p>
    </div>
    `;

    card3.innerHTML = `
    <div class="historia-card-item">
        <div class="historia-card-header">
            <i class="bi bi-award"></i>
            <h5 class="historia-card-titulo">${i18next.t('qualidade_title3')}</h5>
        </div>
        <p class="historia-card-paragrafo">
            ${i18next.t('qualidade_desc3')}
        </p>
    </div>
    `;

    botaoEscolha3.style.backgroundColor = 'var(--cor-secundaria)';
    botaoEscolha3.style.color = 'white';

    botaoEscolha1.style.backgroundColor = 'rgb(246, 246, 246)';
    botaoEscolha1.style.color = 'var(--cor-secundaria)';

    botaoEscolha2.style.backgroundColor = 'rgb(246, 246, 246)';
    botaoEscolha2.style.color = 'var(--cor-secundaria)';
}

const cardCriacao = document.querySelector('.img-card-criacao');
const cardManutencao = document.querySelector('.img-card-manutencao');
const cardSuporte = document.querySelector('.img-card-suporte');
const cardSeo = document.querySelector('.img-card-seo');
const cardResponsividade = document.querySelector('.img-card-responsividade');

function traduzEn() {
    cardCriacao.innerHTML = '<img class="img-servicos" src="./assets/criacao-img-ingles.png" alt="Card image with the title Creation and text describing it">'
    cardManutencao.innerHTML = '<img class="img-servicos" src="./assets/manutencao-img-ingles.png" alt="Card image with the title Maintenance and text describing it">'
    cardSuporte.innerHTML = '<img class="img-servicos" src="./assets/suporte-img-ingles.png" alt="Card image with the title Support and text describing it">'
    cardSeo.innerHTML = '<img class="img-seo" src="./assets/seo-img-ingles.png" alt="Card image with the title Support and text describing it">'
    cardResponsividade.innerHTML = '<img class="img-responsividade" src="./assets/responsividade-img-ingles.png" alt="Card image with the title Support and text describing it">'
}

function traduzPt() {
    cardCriacao.innerHTML = '<img class="img-servicos" src="./assets/criacao-img.png" alt="Imagem de card com o titulo Criação e texto descrevendo">'
    cardManutencao.innerHTML = '<img class="img-servicos" src="./assets/manutencao-img.png" alt="Imagem de card com o titulo Manutenção e texto descrevendo">'
    cardSuporte.innerHTML = '<img class="img-servicos" src="./assets/suporte-img.png" alt="Imagem de card com o titulo Suporte e texto descrevendo">'
    cardSeo.innerHTML = '<img class="img-seo" src="./assets/seo-img.png" alt="Imagem de card com o titulo Suporte e texto descrevendo">'
    cardResponsividade.innerHTML = '<img class="img-responsividade" src="./assets/responsividade-img.png" alt="Imagem de card com o titulo Suporte e texto descrevendo">'
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: false,
        margin: 10,
        nav: true,
        autoplay: false
    });

    var animation = lottie.loadAnimation({
        container: document.getElementById('lottie-animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/47e720fa-50bc-4c22-858e-c0ed0a50e764/CqwO6uGMs2.json'
    });
});
const translations = {
    pt: {
        headerLink1: "Nosso propósito",
        headerLink2: "Serviços",
        headerLink3: "Contato",
        paragrafoPrincipal: "Impulsione seu negócio e aumente seu alcance com as nossas estratégias minuciosamente desenvolvidas para atingir o seu cliente e transformar cliques em vendas ",
        saberMaisPrincipal: "QUER SABER MAIS...",

    },
    en: {
        headerLink1:"Our purpose",
        headerLink2:"Services",
        headerLink3:"Contact",
        paragrafoPrincipal: "Boost your business and increase your reach with our carefully developed strategies to reach your customer and turn clicks into sales",
        saberMaisPrincipal: "WANT TO KNOW MORE...",

    }
};

function changeLanguage(language) {
    document.querySelector('.header-link1').textContent =translations[language].headerLink1
    document.querySelector('.header-link2').textContent =translations[language].headerLink2
    document.querySelector('.header-link3').textContent =translations[language].headerLink3
    document.querySelector('.principal-paragrafo').textContent =translations[language].paragrafoPrincipal
    document.querySelector('.principal-sabermais').textContent =translations[language].saberMaisPrincipal

}

window.onload = function() {
    changeLanguage('pt');
};
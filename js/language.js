const translations = {
    en: {
        title: "Welcome to My Website",
        content: "This is a sample content of the website."
    },
    pt: {
        title: "Bem-vindo ao Meu Site",
        content: "Este é um conteúdo de exemplo do site."
    }
};

function changeLanguage(language) {
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('content').textContent = translations[language].content;
}
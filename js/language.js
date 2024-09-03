function translateText(node, translations) {
    if (node.nodeType === 3) { 
        const textContent = node.nodeValue.trim();
        if (textContent.length > 0) {
            const translatedText = translations[textContent];
            if (translatedText) {
                node.nodeValue = translatedText;
            }
        }
    } else { 
        node.childNodes.forEach(child => translateText(child, translations));
    }
}

function translateElement(element, translations) {
    element.childNodes.forEach(node => {
        if (node.nodeType === 3) { 
            const textContent = node.nodeValue.trim();
            if (textContent.length > 0) {
                const translatedText = translations[textContent];
                if (translatedText) {
                    node.nodeValue = translatedText;
                }
            }
        } else if (node.nodeType === 1) { 
            translateElement(node, translations);
        }
    });
}

function changeLanguage(language) {
    const translations = {
        'en': {
            'Nosso propósito': 'Our purpose',
            'Serviços': 'Services',
            'Contato': 'Contact',
            'Impulsione seu negócio e': 'Boost your business and',
            'aumente seu alcance': 'increase your reach',
            'para atingir o seu cliente': 'to target your customer',
            'vendas': 'sales'
        },
        'pt': {
            'Our purpose': 'Nosso propósito',
            
        }
    };

    document.querySelectorAll('body *').forEach(node => {
        translateText(node, translations[language]);
    });

    const paragraph = document.querySelector('.principal-paragrafo');
    if (paragraph) {
        translateElement(paragraph, translations[language]);
    }
}

document.querySelector('.header-link-icon[alt="icone da bandeira dos Estados Unidos em forma de circulo para traduzir para inglês"]').addEventListener('click', () => {
    changeLanguage('en');
});

document.querySelector('.header-link-icon[alt="icone da bandeira do Brasil em forma de circulo para traduzir para português"]').addEventListener('click', () => {
    changeLanguage('pt');
});

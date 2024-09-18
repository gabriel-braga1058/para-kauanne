const photos = [
    { src: 'foto1.jpg', caption: '"Guaraná virou um dos nossos lugares favoritos"' },
    { src: 'foto2.jpg', caption: '"Nosso primeiro dia no templo como namorados"' },
    { src: 'foto3.jpg', caption: '"Quando finalmente os anéis ficaram em nossos dedos"' },
    { src: 'foto4.jpg', caption: '"Depois da melhor aula do seminário que já vi"' },
    { src: 'foto5.jpg', caption: '"Sua primeira surpresa"' },
    { src: 'foto6.jpg', caption: '"Quando mostrou para todo mundo que nós estávamos namorando"' },
    { src: 'foto7.jpg', caption: '"Quando o cinema se tornou meu lugar favorito ao seu lado"' },
    { src: 'foto8.jpg', caption: '"Dois meses de namoro e muitas aventuras"' },
    { src: 'foto9.jpg', caption: '"Quando “Divertidamente” e a Vanda nos ajudaram"' },
    { src: 'foto10.jpg', caption: '"Quando me levou ao melhor sushi do mundo"' },
    { src: 'foto11.jpg', caption: '"Quando tiramos a foto que nos prepara para a eternidade"' },
    { src: 'foto12.jpg', caption: '"Quando você me mostrou onde te levar nos momentos tristes"' },
    { src: 'foto13.jpg', caption: '"Eu me preparando para te carregar até o altar"' },
    { src: 'foto14.jpg', caption: '"Quando olhei para o pôr do sol e percebi que lutaria por você quantas vezes fossem necessárias"' },



    
    // Continue adicionando mais fotos e frases até chegar a 30, se necessário
];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function updateCarousels() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const photoElement = carousel.querySelector('img');
        const captionElement = carousel.querySelector('.caption');
        
        const randomIndex = getRandomIndex(photos.length);
        photoElement.src = photos[randomIndex].src;
        captionElement.textContent = photos[randomIndex].caption;
    });
}

// Atualiza os carrosséis ao carregar a página
updateCarousels();

// Recarrega os carrosséis a cada 2 segundos
setInterval(updateCarousels, 4000); // 2 segundos

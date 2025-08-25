// Array para armazenar os objetos do carrossel
let carouselArr = [];

// Classe que representa UM item do carrossel
class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    // Inicia o carrossel
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._show(); // mostra o primeiro item
            Carousel._interval = setInterval(Carousel.Next, 2000); // troca a cada 2s
        } else {
            throw "O método Start precisa de um array não vazio.";
        }
    }

    // Avança para a próxima imagem
    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel._show();
    }

    // Mostra o item atual no HTML
    static _show() {
        const current = carouselArr[Carousel._sequence];

        // Atualiza imagem
        document.getElementById("carousel").innerHTML = `
            <a href="${current.link}">
                <img src="img/${current.image}" style="width:100%; height:auto; border-radius:8px;">
            </a>`;

        // Atualiza título
        document.getElementById("carousel-title").innerHTML = `<a href="${current.link}" style= "color: #000">${current.title} </a>`;
    }
}

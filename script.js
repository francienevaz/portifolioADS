document.addEventListener("DOMContentLoaded", () => {
    let pageContainer = document.querySelector('.container');

    const links = document.querySelectorAll('.links');

    // Intercepta o clique nos links

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            let nextPage = this.getAttribute('href');
            
            // Adiciona a classe 'fadeOut' para aplicar a transição de saída
            pageContainer.classList.add('fadeOut');
            link.classList.add('currentLink');
            
            setTimeout(function() {
                // Carrega a próxima página
                window.location.href = nextPage;
            }, 500);
        });
    });
});
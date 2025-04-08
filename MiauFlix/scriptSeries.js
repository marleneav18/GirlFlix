document.addEventListener("DOMContentLoaded", () => { 

    const peliculas = [
        {
            id: 1,
            titulo: "The Summer I Turned Pretty",
            imagen: "images/theSummer.png",
            descripcion: "Una serie de amor adolescente de una chica que pasa sus veranos en una casa de playa.",
        },
        {   
            id: 2,
            titulo: "Love Alarm",
            imagen: "images/loveAlarm.webp",
            descripcion: "Una serie que explora el amor y la tecnología a través de una aplicación.",
        },
        {
            id: 3,
            titulo: "Something In The Rain",
            imagen: "images/something.jpg",
            descripcion: "Una serie que sigue la historia de amor entre una mujer mayor y un hombre más joven.",
        }
    ];

    const esCatalogo = window.location.pathname.includes("series.html");

    if(esCatalogo) {
        cargarPeliculas(peliculas);
    }

    function cargarPeliculas(lista) {
        const contenedor = document.querySelector("#peliculas");
        if(!contenedor) return;
        contenedor.innerHTML = ""; // Limpiar el contenedor antes de cargar las películas

        lista.forEach(pelicula => {
            const card = crearCard(pelicula);
            contenedor.appendChild(card);
        });

    }

    function cargarPeliculas(lista) {
        const contenedor = document.querySelector("#peliculas");
        if(!contenedor) return;
        contenedor.innerHTML = ""; // Limpiar el contenedor antes de cargar las películas

        lista.forEach(pelicula => {
            const card = crearCard(pelicula);
            contenedor.appendChild(card);
        });

    }

    function crearCard(pelicula) {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
            <div class="card mb-3">
                <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                <div class="card-body">
                <h5 class="card-title">${pelicula.titulo}</h5>
                <p class="card-text">${pelicula.descripcion}</p>
                <button class="btn btn-primary btn-ver">Ver</button>
                <button type="button" class="btn btn-danger bi-heart btn-like" data-id="${pelicula.id}"></button>
                <button class="btn btn-warning btn-favorito bi-star" style="float: right; data-id="${pelicula.id}"></button>
        `;

        // Funcionalidad del boton like
        const botonLike = col.querySelector(`.btn-like`);
        let like = false;

        botonLike.addEventListener('click', () => {
            like = !like;
            if (like) {
                botonLike.classList.remove('bi-heart');
                botonLike.classList.add('bi-heart-fill');
            } else {
                botonLike.classList.remove('bi-heart-fill');
                botonLike.classList.add('bi-heart');
            }
        });

        //Fncionalidad del boton favorito
        const botonFavorito = col.querySelector(`.btn-favorito`);
        let fav = false;

        botonFavorito.addEventListener('click', () => {
            fav = !fav;
            if (fav) {
                botonFavorito.classList.remove('bi-star');
                botonFavorito.classList.add('bi-star-fill');
            } else {
                botonFavorito.classList.remove('bi-star-fill');
                botonFavorito.classList.add('bi-star');
            }
        });

        return col;
    }

});
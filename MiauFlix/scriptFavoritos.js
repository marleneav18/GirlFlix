document.addEventListener("DOMContentLoaded", () => { 

    const peliculas = [
        {
            id: 1,
            titulo: "Alguien Como Él",
            imagen: "images/alguienComoEl.webp",
            descripcion: "Una historia de amor entre dos personas que parecen ser opuestos.",
        },
        {   
            id: 2,
            titulo: "Enredados",
            imagen: "images/enredados.jpg",
            descripcion: "La historia de Rapunzel, una joven con un cabello mágico que anhela la libertad.",
        },
        {
            id: 3,
            titulo: "Anyone But You",
            imagen: "images/anyoneButYou.jpeg",
            descripcion: "Una comedia romántica que sigue a dos personas que se odian pero están destinadas a estar juntas.",
        },
        {
            id: 4,
            titulo: "Aladin",
            imagen: "images/aladin.jpg",
            descripcion: "La historia de un joven que encuentra una lámpara mágica y se convierte en príncipe.",
        },
        {
            id: 5,
            titulo: "Taylor Swift: The Eras Tour",
            imagen: "images/taylor.jpg",
            descripcion: "Un viaje a través de la carrera de Taylor Swift, desde sus inicios hasta su éxito actual.",
        }

    ];

    const esCatalogo = window.location.pathname.includes("favoritos.html");

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
                <button class="btn btn-warning btn-favorito bi-star-fill" style="float: right; data-id="${pelicula.id}"></button>
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
                botonFavorito.classList.remove('bi-star-fill');
                botonFavorito.classList.add('bi-star');
            } else {
                botonFavorito.classList.remove('bi-star');
                botonFavorito.classList.add('bi-star-fill');
            }
        });

        return col;
    }

});


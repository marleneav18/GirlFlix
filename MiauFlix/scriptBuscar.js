document.addEventListener("DOMContentLoaded", () => { 

    const peliculas = [
        {
            id: 1,
            titulo: "Taylor Swift: The Eras Tour",
            imagen: "images/taylor.jpg",
            descripcion: "Un viaje a través de la carrera de Taylor Swift, desde sus inicios hasta su éxito actual.",
        },
        {
            id: 2,
            titulo: "Blanca Nieves",
            imagen: "images/blancaNieves.jpeg",
            descripcion: "La historia de Blanca Nieves, una princesa que se enfrenta a la malvada reina.",
        },
        {
            id: 3,
            titulo: "The Summer I Turned Pretty",
            imagen: "images/theSummer.png",
            descripcion: "Una serie de amor adolescente de una chica que pasa sus veranos en una casa de playa.",
        },
        {
            id: 5,
            titulo: "To All The Boys I've Loved Before",
            imagen: "images/toAllBoys.jpg",
            descripcion: "Una comedia romántica sobre una chica cuyas cartas de amor secretas son enviadas.",
        },
        {
            id: 4,
            titulo: "Aladin",
            imagen: "images/aladin.jpg",
            descripcion: "La historia de un joven que encuentra una lámpara mágica y se convierte en príncipe.",
        },
        {
            id: 6,
            titulo: "Anyone But You",
            imagen: "images/anyoneButYou.jpeg",
            descripcion: "Una comedia romántica que sigue a dos personas que se odian pero están destinadas a estar juntas.",
        },
        {
            id: 7,
            titulo: "Love Alarm",
            imagen: "images/loveAlarm.webp",
            descripcion: "Una serie que explora el amor y la tecnología a través de una aplicación.",
        },
        {
            id: 8,
            titulo: "La Sirenita",
            imagen: "images/lasirenita.jpg",
            descripcion: "La historia de Ariel, una sirena que sueña con convertirse en humana.",
        },
        {
            id: 9,
            titulo: "Encantada",
            imagen: "images/encantada.jpg",
            descripcion: "Una princesa de un mundo de cuentos de hadas es transportada a la ciudad de Nueva York.",
        },
        {
            id: 10,
            titulo: "Enredados",
            imagen: "images/enredados.jpg",
            descripcion: "La historia de Rapunzel, una joven con un cabello mágico que anhela la libertad.",
        },
        {
            id: 11,
            titulo: "Alguien Como Él",
            imagen: "images/alguienComoEl.webp",
            descripcion: "Una historia de amor entre dos personas que parecen ser opuestos.",
        },
        {
            id: 12,
            titulo: "Something In The Rain",
            imagen: "images/something.jpg",
            descripcion: "Una serie que sigue la historia de amor entre una mujer mayor y un hombre más joven.",
        }
    ];


    // Función para cargar todas las películas
    function cargarPeliculas(lista) {
        const contenedor = document.querySelector("#peliculas");
        if (!contenedor) return;
        contenedor.innerHTML = ""; // Limpiar el contenedor antes de cargar las películas

        lista.forEach(pelicula => {
            const card = crearCard(pelicula);
            contenedor.appendChild(card);
        });
    }

    // Función para crear una tarjeta de película
    function crearCard(pelicula) {
        const col = document.createElement("div");
        col.className = "col-md-4";
        col.innerHTML = `
            <div class="card mb-3" data-id="${pelicula.id}">
                <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.titulo}</h5>
                    <p class="card-text">${pelicula.descripcion}</p>
                    <button class="btn btn-primary btn-ver">Ver</button>
                </div>
            </div>
        `;
        return col;
    }

    // Función para filtrar las películas 
    function filtrarPeliculas() {
        const query = document.getElementById("busqueda").value.toLowerCase();
        const peliculasFiltradas = peliculas.filter(pelicula => 
            pelicula.titulo.toLowerCase().includes(query) || pelicula.descripcion.toLowerCase().includes(query)
        );
        cargarPeliculas(peliculasFiltradas);
    }

    // Cargar todas las películas al cargar la página
    cargarPeliculas(peliculas);

    // Asociar el evento de búsqueda al input
    const encontrar = document.getElementById("busqueda");
    if (encontrar) {
        encontrar.addEventListener("input", filtrarPeliculas);
    }
});
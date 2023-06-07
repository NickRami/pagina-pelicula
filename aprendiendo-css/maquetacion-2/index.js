const imagen = document.querySelector(".img-header");

const coleccion = [
   coleccion, {
        imagenes : {
            uno: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
            dos : ""
        }
   }
]


setTimeout(({coleccion}) => {
    imagen.src = "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
}, 1000);
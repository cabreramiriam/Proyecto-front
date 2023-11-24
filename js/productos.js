let jsonDeMaquillaje = `[
    {
        "nombre": "Base de maquillaje",
        "descripcion": "Una base de maquillaje de cobertura media para un cutis uniforme",
        "precio": 4.20,
        "imagen": "../imagenes/base_mac.jpg"
    },
    {
        "nombre": "Paleta de sombras",
        "descripcion": "Paleta de sombras con una variedad de tonos para crear looks impresionantes",
        "precio": 3.20,
        "imagen": "../imagenes/paleta de maquillaje.webp"
    },
    {
        "nombre": "Lápiz labial mate",
        "descripcion": "Lápiz labial de larga duración con un acabado mate elegante",
        "precio": 5.70,
        "imagen": "../imagenes/labiales.jpg"
    },
    {
        "nombre": "Máscara de pestañas",
        "descripcion": "Máscara que proporciona volumen y longitud a las pestañas",
        "precio": 5.60,
        "imagen": "../imagenes/rimel.jpg"
    },
    {
        "nombre": "Rubor en polvo",
        "descripcion": "Rubor en polvo de tonos naturales para resaltar tus mejillas",
        "precio": 5.70,
        "imagen": "../imagenes/polvo compacto.jpg"
    }
]`;


let jsonConvertido = JSON.parse(jsonDeMaquillaje);


for (let i = 0; i < jsonConvertido.length; i++) {
 
    let article = document.createElement("article");

 
    article.style.border = "solid";
    article.style.borderWidth = "1px";
    article.style.borderRadius = "5%";

    let nombre = document.createElement("h2");
    nombre.innerText = jsonConvertido[i].nombre;

    
    let img = document.createElement("img");
    img.style.width = "40%";
    img.src = jsonConvertido[i].imagen;

 
    let descripcion = document.createElement("p");
    descripcion.innerText = jsonConvertido[i].descripcion;

   
    let precio = document.createElement("p");
    precio.innerText = "Precio: $" + jsonConvertido[i].precio.toFixed(2);

    article.appendChild(nombre);
    article.appendChild(img);
    article.appendChild(descripcion);
    article.appendChild(precio);

   
    document.getElementById("articleByE").appendChild(article);
}
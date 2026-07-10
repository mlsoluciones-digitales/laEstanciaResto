let menu = []; 

fetch("json/menu.json")
.then(respuesta => respuesta.json())
.then(datos => {
    menu = datos;
    console.log(menu);
}); 


/*Obtener todos los botones con la clase .btn*/
const botones = document.querySelectorAll(".btn"); 

/*Agregar el evento a cada uno de los botones al recorrerlos con un forEach*/
botones.forEach(boton => {
    boton.addEventListener("click", ()=> {
        mostrarMenu(boton.value); 
    })
})

function mostrarMenu(categoria){
    const contenedor = document.querySelector(".descripcionMenu"); 

    contenedor.innerHTML = ""; 

    menu.forEach(plato => {
        if(plato.categoria === categoria){
            document.querySelector(".subtituloMenu").textContent = categoria.toUpperCase();
            contenedor.innerHTML += `
            <div class="platos">
                <p>${plato.plato}</p>
                <p>${plato.precio}</p>
            </div>
            `
        }
})
}


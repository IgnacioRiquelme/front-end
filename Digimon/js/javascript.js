// obtener elementos con id tabla y id contenido
let tabla =document.getElementById("tabla");
let contenido =document.getElementById("contenido");
console.log(tabla);  //mostrar en consola con el metodo console.log()
console.log(contenido); //mostrar en consola con el metodo console.log()

// consumo de api con fetch
fetch('https://digimon-api.vercel.app/api/digimon')
.then(response => response.json())
.then(data=> {
    //console.log(data);
    mostrartabla(data);
}).catch(error => console.log(error))

//funcion para obtener datos del digimon y mostrarlo en la tabla con id tabla y id de contenido
function mostrartabla(response) {
    //limpiar el elemento con id contenido
    contenido.innerHTML = "";
    //recorrer los datos del digimon obtenidos de la api
    for(let temp of response){
        //para incrustar valores en el contenido dinamicamente se necesita
        //`` comillas francesas y la anotacion o estructura ${temp.key}
        contenido.innerHTML +=
        `<td>${temp.name}</td>
        <td><img src="${temp.img}" alt="" width="50px" height="50px" ></td>
        <td>${temp.level}</td>
        `
    }
}
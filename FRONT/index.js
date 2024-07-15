document.addEventListener("DOMContentLoaded",()=>{
const bodyTablaPosteos = document.querySelector("#body-tabla-posteos")
const formCrearPosteo = document.querySelector("#form-crear-posteo")
const fetchPosteos = async ()=>{
try {
    const respuesta = await axios.get (`http://localhost:3030/posteos/`)
const posteos = respuesta.data
//limpiar
bodyTablaPosteos.innerHTML = "";
posteos.forEach(posteo=>{
    const fila = document.createElement("tr")
    const celdaTitulo = document.createElement("td")
    const celdaContenido=document.createElement("td")
    const celdaAcciones= document.createElement("td")
    celdaTitulo.textContent = posteo.titulo
    celdaContenido.textContent = posteo.contenido
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.addEventListener("click",()=>{borrarPosteo(posteo.id)})
    const botonEditar = document.createElement("button")
    botonEditar.textContent = "Editar"
    botonEditar.addEventListener("click", ()=>{
        window.location.href = `edit.html?id=${posteo.id}`
     })
    celdaAcciones.appendChild(botonEliminar)
    celdaAcciones.appendChild(botonEditar)
    fila.appendChild(celdaTitulo)
    fila.appendChild(celdaContenido)
    fila.appendChild(celdaAcciones)
    bodyTablaPosteos.appendChild(fila)
})} 

catch (error) {
    console.error (`Error: ${error}`)
}}

const borrarPosteo = async (id)=>{
    try {
        await axios.delete (`http://localhost:3030/posteos/${id}`)
        fetchPosteos()
    } catch (error) {
        console.error (`Error al eliminar el post : ${error}`)
    }
}

formCrearPosteo.addEventListener("submit", async function (evento){
    evento.preventDefault();
    const nuevoPosteo = {
        titulo: document.querySelector("#nuevo-titulo").value ,
        contenido:document.querySelector("#nuevo-contenido").value 
    };
    try {
        await axios.post(`http://localhost:3030/posteos/`,nuevoPosteo)
        formCrearPosteo.reset()
        fetchPosteos()
    } catch (error) {
        console.error (`Error al postear: ${error}`)
    }

})

fetchPosteos()
})
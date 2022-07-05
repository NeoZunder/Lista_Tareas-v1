const formulario = document.getElementById('formulario');
const tarea = document.getElementById('input-tarea');
const btnAgregar = document.getElementById('submit');
const lista_tareas = document.getElementById('lista-tareas');

const agregarTarea = ()=>{
    const newTarea = document.createElement("div"); //Creo la caja de la tarea
          newTarea.setAttribute("class", "tarea");

    const textTarea = document.createElement("p");
          textTarea.setAttribute("class","texto");
          textTarea.textContent = tarea.value;
          newTarea.appendChild(textTarea);
    
    const btnEliminar = document.createElement("button");
          btnEliminar.type = "button";
          btnEliminar.textContent = "Eliminar Tarea";
          btnEliminar.setAttribute("class", "btnEliminar");

    const btnRealizada = document.createElement("button");
          btnRealizada.type = "button";
          btnRealizada.textContent = "Tarea Realizada";
          btnRealizada.setAttribute("class", "btnRealizada");

    if(textTarea.textContent.trim().length !== 0 ){
        newTarea.appendChild(btnRealizada);
        newTarea.appendChild(btnEliminar);
        lista_tareas.appendChild(newTarea);

        btnRealizada.addEventListener('click', ()=>{
            if(!textTarea.classList.contains("realizada")){
                textTarea.classList.add("realizada");
                //console.log("Agrego Realizada")
            }else{
                textTarea.classList.remove("realizada");
                console.log("Remuevo Realizada")
            }   
        })

        btnEliminar.addEventListener('click', ()=>{
            eliminarTarea(newTarea);
         });
    }else{
        alert("DEBE INGRESAR TAREA");
        return;
    }    

    console.log(newTarea);
}

const eliminarTarea = (e) => {
    lista_tareas.removeChild(e);
}

btnAgregar.addEventListener('click',()=>{
    agregarTarea()
})


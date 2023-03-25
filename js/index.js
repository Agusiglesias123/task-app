// DOM
let buttonEnviar = document.getElementById('buttonEnviar')
let list = document.getElementById('list')
let ul = document.getElementById('ul')
let listaInput = document.getElementById('listaInput')
let buttonEliminarTodo = document.getElementById('eliminarTodo')



let tareas = []
if(localStorage.getItem("tareas")){
    tareas = JSON.parse(localStorage.getItem("tareas"))
}else{
    console.log("Seteando historial de productos")
    localStorage.setItem("tareas", JSON.stringify(tareas))
}


mostrarTareas(tareas);


// EVENTOS
buttonEnviar.addEventListener('click',(e)=>{cargarTask(e, tareas)})


function cargarTask(e, array){
    e.preventDefault();
    let text = listaInput.value
    if (text !== '' ){
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
        array.push(text)
        localStorage.setItem("tareas", JSON.stringify(array))
        mostrarTareas(array)
    }
    listaInput.value = '';
}

function mostrarTareas(array) {
    ul.innerHTML = '';
    array.forEach((tarea, index) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = tarea;
        li.appendChild(p);
        let btnEliminar = document.createElement('i');
        btnEliminar.classList = 'btnEliminar bi bi-trash3-fill';
        btnEliminar.addEventListener('click', () => {
            array.splice(index, 1);
            localStorage.setItem("tareas", JSON.stringify(array));
            mostrarTareas(array);
        });
        li.appendChild(btnEliminar);
        ul.appendChild(li);
    });

    buttonEliminarTodo.addEventListener('click', () => {
        localStorage.removeItem('tareas');
        ul.innerHTML = '';
        tareas = [];
    });
}













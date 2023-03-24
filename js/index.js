let listaInput = document.getElementById('listaInput')
let buttonEnviar = document.getElementById('buttonEnviar')
let list = document.getElementById('list')
let ul = document.getElementById('ul')



buttonEnviar.addEventListener('click',(e) =>{
    e.preventDefault();
    let text = listaInput.value
    if (text !== '' ){
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = text;
        li.appendChild(p);
        ul.appendChild(li);
        listaInput.value = '';
        console.log('error')
    }
})



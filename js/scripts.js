const titulo = document.querySelector("#digitacao");


function typeWrite(elemento){
    const textoarray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoarray.forEach((letra, i)=>{
        setTimeout(() => elemento.innerHTML += letra, 75*i)
    })
}


typeWrite(titulo);
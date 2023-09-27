const imgJS = document.getElementById("js");
const imgJava = document.getElementById("java");
const imgcsharp = document.getElementById("c#");
const imgPython = document.getElementById("python");


const descJs = document.querySelector(".javascript");
const descJava = document.querySelector(".java");
const descCsharp = document.querySelector(".csharp");
const descPython= document.querySelector(".python");

function mostrarJava(){
    imgJava.addEventListener('click', ()=>{
        descJava.style.display="block";
        descJs.style.display="none";
        descCsharp.style.display="none";
        descPython.style.display="none";
    })
}


function mostrarJs(){
    imgJS.addEventListener('click', ()=>{
        descCsharp.style.display="none";
        descPython.style.display="none";
        descJava.style.display="none";
        descJs.style.display="block";
    })
}

function mostrarCsharp(){
    imgcsharp.addEventListener('click', ()=>{  
        descPython.style.display="none";
        descJava.style.display="none";
        descJs.style.display="none";
        descCsharp.style.display="block";
    })
}

function mostrarPython(){
    imgPython.addEventListener('click', ()=>{  
        descJava.style.display="none";
        descJs.style.display="none";
        descCsharp.style.display="none";
        descPython.style.display="block";
    })
}

mostrarJava()
mostrarPython()
mostrarCsharp()
mostrarJs()





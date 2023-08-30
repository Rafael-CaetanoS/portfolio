const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) =>{
    const accordion_header_item = item.querySelector(".accordion_header");
    
    accordion_header_item.addEventListener("click", ()=>{
         const accordion_content_item = item.querySelector(".accordion_content");
       
         const content_actived = document.querySelector(".active");
        VerifyActive(item, accordion_content_item, content_actived);
    });
})

function VerifyActive(item, content, content_actived){
    const icon_item = item.querySelector(".icon");
    
    const icons = document.querySelectorAll(".icon");

    icons.forEach((item) => (item.innerHTML = "+"));
   
    if(content_actived){
        content_actived.style.height = 0;
        content_actived.classList.remove("active");
    }

    if (content !== content_actived){
        icon_item.innerHTML= "-";
        content.classList.add("active");
        content.style.height = content.scrollHeight + 10 + 'px'

    }
}

const front = document.getElementById("front");
const back = document.getElementById("back");
const todos = document.getElementById("todos");
const projetoFront = document.querySelectorAll(".front");
const projetoBack = document.querySelectorAll(".back-end");


function mostrarfront(){
    front.addEventListener("click", ()=>{
        front.classList.add("selecionado");
        todos.classList.remove("selecionado");
        back.classList.remove("selecionado")
        projetoFront.forEach((item)=>{
            item.style.display="block";
        })
        projetoBack.forEach((item)=>{
            item.style.display="none";
        })
       
    })
}

function mostrarback(){
    back.addEventListener("click", ()=>{
        back.classList.add("selecionado");
        todos.classList.remove("selecionado");
        front.classList.remove("selecionado")
        projetoBack.forEach((item)=>{
            item.style.display="block";
            item.style.transition= "all .5s ease";
        })
        projetoFront.forEach((item)=>{
            item.style.display="none";
        })
       
    })
}

function mostrarTodos(){
    todos.addEventListener("click", ()=>{
        todos.classList.add("selecionado");
        front.classList.remove("selecionado");
        back.classList.remove("selecionado");
        projetoBack.forEach((item)=>{
            item.style.display="block";
        })
        projetoFront.forEach((item)=>{
            item.style.display="block";
        })
    })
}
mostrarTodos()
mostrarfront()
mostrarback()
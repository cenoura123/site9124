const Dark = document.querySelector('#MoonDark');
const Light = document.querySelector('#MoonLight');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const icons = document.querySelector('.Icons');
const textElement = document.querySelector('#Text');
const Inicio = document.querySelector('#Inicio');
const Projeto = document.querySelector('#Projetos');
const Sobre = document.querySelector('#Sobre');
const Contato = document.querySelector('#Contato');
const footer_text = document.querySelector('.footer-text');
const section1 = document.querySelector('#section-1');
const Scontainer = document.querySelector('.Section-Container');
const TextContainer = document.querySelector('.Container-Text');
const H1Container = document.querySelector('#Container-h1');
const menu_icons = document.querySelector('ul-menu');




function ModoLight() {
    Dark.style.display = "block";
    Light.style.display = "none";
    header.style.backgroundColor = '#fff';
    logo.style.color="#000";
    menu.style.color="#000";
    icons.style.color="#000";
    document.body.style.backgroundColor="#fff";
    footer_text.style.color="#000";
}

function ModoDark() {
    Light.style.display = "block";  
    Dark.style.display = "none";
    header.style.backgroundColor = '#000';
    logo.style.color="#fff";
    menu.style.color="#fff";
    icons.style.color="#fff";
    document.body.style.backgroundColor="#212121";
    footer_text.style.color="#fff";
}

function TrocaDeModo(id) {
    if (id == "BtnDark") {
        ModoDark();
    } else if (id == "BtnLight") {
        ModoLight()
    }
}

function EntrarProjetos(id){
    if (id == 'div1'){
        window.location.href='projects/Ecommerce/index.html';
    }
    else if (id == 'div2'){
        window.location.href='projects/Cards/index.html';
    }
    else if (id == 'div3'){
        window.location.href='projects/todo_list/index.html';
    }
    else if (id == 'github'){
        console.log("OI")
    }
}



function TelaProjeto(id){
    if (id === "inicio") {
        Scontainer.innerHTML = '';
        section1.className = "section-1";
        Scontainer.innerHTML=`
            <h1 id="Container-h1">Início</h1>
            <br>
            <p class="Container-Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum quo odit reprehenderit iusto animi laboriosam dicta expedita sunt eligendi, ex deserunt corrupti! Assumenda consequatur aliquam natus alias, iure unde.</p>
        `;
    } 
    else if (id === "projeto") {
        section1.className = 'section-2';
        TextContainer.style.display = 'none';
        // Limpar contêiner existente antes de adicionar novos projetos
        Scontainer.innerHTML = `
            <h1 id="Container-h1">Projetos</h1>
        `;

        const divProject = document.createElement('div');
        divProject.className = "div-projects";
        Scontainer.appendChild(divProject);

        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');

        div1.className = "div-1 div-project-container";

        div2.className = "div-2 div-project-container";

        div3.className = "div-3 div-project-container";

        div1.addEventListener('click', function(){
            EntrarProjetos('div1')
        });
        div2.addEventListener('click', function(){
            EntrarProjetos('div2')
        });
        div3.addEventListener('click', function(){
            EntrarProjetos('div3')
        });

        divProject.appendChild(div1);
        divProject.appendChild(div2);
        divProject.appendChild(div3);
    
    }
    else if (id == "sobre"){
        Scontainer.innerHTML = '';
        section1.className='section-3';
        Scontainer.innerHTML=`
            <h1 id="Container-h1">Sobre</h1>
            <br>
            <p class="Container-Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum quo odit reprehenderit iusto animi laboriosam dicta expedita sunt eligendi, ex deserunt corrupti! Assumenda consequatur aliquam natus alias, iure unde.</p>
        `;
    }
    else if (id == "contato"){
        Scontainer.innerHTML = '';
        section1.className='section-4';
        Scontainer.innerHTML=`
            <h1 id="Container-h1">Contato</h1>
            <br>
            <p class="Container-Text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum quo odit reprehenderit iusto animi laboriosam dicta expedita sunt eligendi, ex deserunt corrupti! Assumenda consequatur aliquam natus alias, iure unde.</p>
            <br>
            <br>
            <div class="git-hub-div">
            <a class="GitHubA" href="https://github.com/cenoura123?tab=repositories"><i id="gitHub" class='bx bxl-github'></i></a>
            </div>
        `;
    }
}



Dark.addEventListener('click', function() {
    TrocaDeModo("BtnDark");
});

Light.addEventListener('click', function() {
    TrocaDeModo("BtnLight");
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

Inicio.addEventListener('click', function(){
    TelaProjeto("inicio");
});
Projeto.addEventListener('click', function(){
    TelaProjeto("projeto");
});
Sobre.addEventListener('click', function(){
    TelaProjeto("sobre");
});
Contato.addEventListener('click', function(){
    TelaProjeto("contato");
});


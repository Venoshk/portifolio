
AOS.init({
    easing: 'ease-in-out-sine'
});

//Projetos 
const btn = document.querySelector(".buttonsBtn");
const btnTwo = document.querySelector(".buttonsBtnTwo");
const cardOne = document.querySelector(".card--project-one");
const cardTwo = document.querySelector(".card--project-two");
let isCardOneOpen = true;
let isCardTwoOpen = true;

// Função para abrir e fechar o primeiro cartão
function toggleCardOne() {
  if (isCardOneOpen || isCardTwoOpen) {
    cardOne.classList.add("card--project--active");
    cardTwo.classList.remove("card--project--active");
    btn.innerHTML = 'Fechar';
    btnTwo.innerHTML = 'Landing-Page'
  } else {
    cardOne.classList.remove("card--project--active");
    btn.innerHTML = 'Ecommecer'
  }
  isCardOneOpen = !isCardOneOpen; // Alternar o estado da variável isCardOneOpen
}

// Função para abrir e fechar o segundo cartão
function toggleCardTwo() {
  if (isCardTwoOpen || isCardOneOpen) {
    cardTwo.classList.add("card--project--active");
    cardOne.classList.remove("card--project--active");
    btnTwo.innerHTML = 'Fechar'
    btn.innerHTML = 'Ecommecer'
  } else {
    cardTwo.classList.remove("card--project--active");
    btnTwo.innerHTML = 'Landing-Page'
  }
  isCardTwoOpen = !isCardTwoOpen;
}
btn.addEventListener("click", toggleCardOne);
btnTwo.addEventListener("click", toggleCardTwo);


//NavBar
const toggleChecker = document.querySelector("#toggleChecker");
const navBar = document.querySelector("nav");
const isCloseMenu = document.querySelector(".fechaMenu");

function OpenNavBar(){
  isCloseMenu.classList.toggle('isClose');
  if(toggleChecker.checked){
    navBar.classList.add("openNavBar");
  }else{
    navBar.classList.remove("openNavBar");
    
  }
}

function closeNavBar(){
  if(isCloseMenu){
    toggleChecker.checked = false
  }
    isCloseMenu.classList.add('isClose');
    navBar.classList.remove("openNavBar");
}
toggleChecker.addEventListener('click', OpenNavBar);
isCloseMenu.addEventListener('click',closeNavBar);

//NavBar links

const linksAll = document.querySelectorAll("a");

navBar.addEventListener('click', (e) => {
  closeNavBar();
  if (e.target.tagName === 'A') {
    linksAll.forEach(link => {
      link.classList.remove('active');
    });
    e.target.classList.add('active');
  }
});


AOS.init({
    easing: 'ease-in-out-sine'
});

//NavBar
const toggleChecker = document.querySelector("#toggleChecker");
const navBar = document.querySelector("nav");
const isCloseMenu = document.querySelector(".closeMenu");

function OpenNavBar(){
  isCloseMenu.classList.toggle('isClose');

  if(toggleChecker.checked){
    navBar.classList.add("openNavBar");

  }else{
    navBar.classList.remove("openNavBar");
  };
};

function closeNavBar(){
  toggleChecker.checked = false; // Defina o estado do toggleChecker para false
  
  isCloseMenu.classList.add('isClose');
  navBar.classList.remove("openNavBar");
};

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


//scroll

const scrollBtn = document.querySelector("#scrollBtn");
const mouseContainer =  document.querySelector('.container_mouse');

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Rolar para baixo
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Verificar se a largura da janela é menor ou igual a 768px
  if (width <= 768) {
    window.scrollBy(0, window.innerHeight); // Rolar para a próxima página inteira
  } else {
    // Se não for menor ou igual a 768px, apenas rolar suavemente para baixo
    scrollBtn.scrollIntoView({
      behavior: 'smooth'
    });
  }
});














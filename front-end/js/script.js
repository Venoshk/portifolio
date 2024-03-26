
AOS.init({
    easing: 'ease-in-out-sine'
});

const btn = document.querySelector(".buttonsBtn");
const btnTwo = document.querySelector(".buttonsBtnTwo");
const cardOne = document.querySelector(".card--project-one");
const cardTwo = document.querySelector(".card--project-two");
let isOpenOne = true;
let isOpenTwo = true

btn.addEventListener("click", () =>{
  if(isOpenOne){
    cardOne.classList.add("card--project--active");
    btn.innerHTML = 'Fechar'
  }else{
    cardOne.classList.remove("card--project--active");
    btn.innerHTML = 'Ecommecer'
  }
  isOpenOne = !isOpenOne; // Alternar o estado da variável isOpenOne
});

btnTwo.addEventListener('click', () => {
  if(isOpenTwo){
    cardTwo.classList.add("card--project--active");
    btnTwo.innerHTML = 'Fechar'
  }
  else{
    cardTwo.classList.remove("card--project--active");
    btnTwo.innerHTML = 'Landing-Page'
  }

  isOpenTwo = !isOpenTwo;
})



console.log(toggle);















console.log(toggle)













//Biblioteca DATA-AOS
AOS.init({
    easing: 'ease-in-out-sine'
});

//FUNÇÃO DE BOM DIA PRA O USER
const interagir = () =>{
    const span = document.querySelector('#js-hora');
    span.style.color = '#7e0a7e'
    span.style.fontSize = '1.25rem'

    const data = new Date();
    const hora = data.getHours(); 

    if(hora <= 12){
        span.innerHTML = `Bom dia`;
    } else if(hora <= 18){
        span.innerHTML = `Boa tarde`;
    }else{
      span.innerHTML = `Boa noite`
    }
}

// Função para mostrar o loading
const showLoading = (show) => {
    const loadingElement = document.querySelector(".loading");
    loadingElement.style.display = show ? "flex" : 'none';
  }

  //ADICIONANDO O LOAD A PAGINA
  document.addEventListener('DOMContentLoaded', () =>{
    showLoading(true);

    setTimeout(() => {
        interagir()
        showLoading(false)
    });
  });
  //Enviando formulario!
  const btn = document.querySelector('#btn');

  document.querySelector('#form').addEventListener('submit', function(event) {
     event.preventDefault();

     const serviceID = 'contact_service';
     const templateID = 'contact_form';
  
     emailjs.sendForm(serviceID, templateID, this).then(() => {
        showLoading(true);
        setTimeout(() => {
            showLoading(false) 
            
        });
      }, (err) => {
        alert(JSON.stringify(err));
      });
  });












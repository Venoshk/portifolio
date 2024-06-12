document.addEventListener("DOMContentLoaded", function() {
const chevron = document.querySelector("#scrollBtn")

const scrollToNextSection = () => {
      const nextSection = document.querySelector('.about');
      if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
      }
  }

  chevron.addEventListener("click", () => scrollToNextSection());
});

document.addEventListener('scroll', () => {
    const scrollWidth = scrollY;
    const logo = document.querySelector(".logo");
    if(scrollWidth > 600){
        logo.classList.add("logo-active");
    }else if(scrollWidth > 1000){
        logo.style.right = "0"
    }
    
    else{
        logo.classList.remove("logo-active");

    }
    
    
})









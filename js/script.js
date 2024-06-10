const test = document.querySelector(".p");
console.log(test)
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
    }else{
        logo.classList.remove("logo-active");
    }

    if(scrollWidth >= 900){
        logo.classList.remove("logo-active");
    }
    
    
})









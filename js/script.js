const test = document.querySelector(".p");
console.log(test)
document.addEventListener("DOMContentLoaded", function() {
const chevron = document.querySelector("#scrollBtn")



const scrollToNextSection = () => {
      const nextSection = document.querySelector('section');
      if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
      }
  }

  chevron.addEventListener("click", () => scrollToNextSection());
});









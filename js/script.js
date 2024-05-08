document.addEventListener("DOMContentLoaded", function() {
  const chevron = document.querySelector("#scrollBtn");
  const hamburger = document.querySelector(".hamburger");
  const main = document.querySelector(".container_sidebar");
  const body = document.querySelector("body");
  
  const scrollToNextSection = () => {
      const nextSection = document.querySelector('section');
      if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const toggleSidebar = () => {
      if (checkbox.checked ) {
          main.classList.add("open")
        
      } else {
          main.classList.remove("open");
         
          
      }
  };

  chevron.addEventListener("click", () => scrollToNextSection());
  hamburger.addEventListener('click', () => toggleSidebar());
});

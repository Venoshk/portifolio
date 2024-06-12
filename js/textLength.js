document.addEventListener('DOMContentLoaded', () => {
    const paragrafos = document.querySelectorAll(".card p");
    const ultimaP = paragrafos[2];

    if(ultimaP &&  ultimaP.textContent.length >= 150){
        ultimaP.textContent = ultimaP.textContent.substring(0,150) + '...'
    }
})
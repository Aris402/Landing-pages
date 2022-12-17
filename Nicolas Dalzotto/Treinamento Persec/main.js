const button = document.querySelector("#second-button");

button.addEventListener('click', () =>{
    window.scroll({bottom: window.bottom, behavior: "smooth"})
})
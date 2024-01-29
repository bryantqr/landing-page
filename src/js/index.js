// alert("oi");
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click", () => {
    // toggle alterna o "ativo", se tiver e clicar, ele remove. Caso o contrario ele adiciona.
    elementoPlataformas.classList.toggle("ativo");
})
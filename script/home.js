//carrosel 1:

  let slideAtual = 0;
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    function mostrarSlide(indice) {
      slides.forEach(slide => slide.classList.remove("ativo"));
      slides[indice].classList.add("ativo");
    }

    function mudarSlide(direcao) {
      slideAtual += direcao;

      if (slideAtual >= slides.length) slideAtual = 0;
      if (slideAtual < 0) slideAtual = slides.length - 1;

      mostrarSlide(slideAtual);
    }

    setInterval(() => {
      mudarSlide(1);
    }, 5000);

    mostrarSlide(slideAtual);
  }

  
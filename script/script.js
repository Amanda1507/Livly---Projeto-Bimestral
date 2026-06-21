document.addEventListener("DOMContentLoaded", () => {

  const formulario = document.getElementById("formCadastro");

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "" || senha === "") {
      mensagem.innerHTML = "Preencha todos os campos!";
      mensagem.style.color = "red";
      return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let novoUsuario = {
      nome: nome,
      email: email,
      senha: senha
    };

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensagem.innerHTML = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    formulario.reset();
  });

});


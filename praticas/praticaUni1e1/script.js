
const inputSubmit = document.querySelector('input[type="submit"]');

inputSubmit.addEventListener('click', efetuarLogin);

function efetuarLogin(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    const inputEmail = document.querySelector('input[type="email"]');

    if (!inputEmail.value) {
        const erro = document.createElement('p');
        erro.innerText = 'Email é obrigatorio';
        inputEmail.parentElement.appendChild(erro);
        inputEmail.focus();
    } else {
        alert("Seja Bem-vindo, " + nome + "!");
    }

    const inputSenha = document.querySelector('input[type="password"]');

    fetch('http://localhost/users/login',{
        method: 'POST',
        body:{email: inputEmail.value, senha:inputSenha.value}
    });

    

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}
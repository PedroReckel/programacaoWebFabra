var modal = document.getElementById('id01');
var nome = document.getElementById('nome')
var senha = document.getElementById('senha')
var botao = document.getElementById('botao')

// Quando o usuário clicar em qualquer lugar fora do modal, ele fecha!
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

botao.addEventListener("click", function(e) {
    e.preventDefault()
    const valorNome = nome.value
    const valorSenha = senha.valor

    if (valorNome === "" || valorSenha === "") {
        alert(`Preencher todos os campos!`)
    }
})
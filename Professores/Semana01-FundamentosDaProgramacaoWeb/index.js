// EXERCÍCIO 10
// Crie um arquivo “index.js” e o conecte no arquivo index.html.
// Adicione uma função em que, quando o usuário clicar no botão enviar do formulário ele exiba um alerta com a frase: Olá “Nome digitado no input”


// Para escrever/declarar uma função, usamos a palavra-chave function
// O nome da função é o mesmo que colocamos no parâmetro onclick lá no botão do HTML
// A função recebe um parâmetro chamado event
function cumprimentarUsuario(event) {

  // Lembra que sempre que clicamos no botão do formulário a página é recarregada?
  // Isso acontece porque o botão do formulário é um elemento do tipo submit - esse é o comportamento padrão do botão
  // Para previnir esse o comportamento padrão, usamos o método preventDefault() do objeto event
  event.preventDefault();

  // Aqui pegamos o valor do input com id nome e guardamos na variável resultado
  var resultado = document.querySelector("#nome").value;

  // E em seguida abrimos alerta na tela com o valor da variável resultado
  window.alert("Olá " + resultado + "!");
}

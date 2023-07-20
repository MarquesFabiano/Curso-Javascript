// Criando um objeto pessoa com uma propriedade nome
const pessoa = {
    nome: "Fabiano"
  };
  

  // Criando um objeto estudante que herda de pessoa
  const estudante = Object.create(pessoa);
  estudante.matricula = 12345;
  
  // Acessando propriedades
  console.log(estudante.nome); // Irá procurar no estudante, não encontrará, então irá procurar no protótipo (pessoa)
  console.log(estudante.matricula); // Propriedade diretamente no objeto estudante
  
  // Modificando o nome do estudante (no objeto estudante)
  estudante.nome = "Lara";
  console.log(estudante.nome); // Agora está no objeto estudante
  console.log(pessoa.nome); // Continua imprimindo "Fabiano" (o objeto pessoa não foi modificado)
  
  // Adicionando um método ao protótipo pessoa
  pessoa.cumprimentar = function() {
    return "Olá, eu sou " + this.nome;
  };
  
  console.log(estudante.cumprimentar()); // Chama o método do protótipo pessoa
  
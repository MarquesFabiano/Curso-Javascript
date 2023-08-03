/* Caso não saiba em que sistema será rodado, use o path para auxiliar a navegação por diretórios*/

const path = requere('path');
console.log(__dirname); // irá dar o caminho da raiz até o diretorio atual
console.log(path.resolve(__dirname, '.','.', 'arquivos', 'img')) // irá avanção do diretorio até o diretorio requirido 
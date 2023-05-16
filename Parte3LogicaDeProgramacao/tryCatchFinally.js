// tratamento de erros: usando Try, Catch e Finally

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date!");
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocateTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //trata erro
} finally{
    console.log('tenha um bom dia!');
}
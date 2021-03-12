var http = require('http');
var fs = require('fs')

http.createServer(
    function(request, response){
        var url = request.url;
        switch(url){
            case '/':
                retornoServidor(response, 'publico/home.html', 'text/html');
                break;
            case'/sobre':
            retornoServidor(response, 'publico/sobre.html', 'text/html');
                break;
            case '/contato':
                retornoServidor(response, 'publico/contato.html', 'text/html');
                break;
            default:
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('404 - Pagina não encontrada');
        }
    }
).listen(9099);
console.log('Servidor rodando no http://localhost:9099');

function retornoServidor(response, filepath, contentType)
{
    fs.readFile(filepath, function(error, data)
    {
        if(error)
        {
            response.writeHead(500,{'Content-Type': 'text/plain'});
            response.end('500 - Erro interno do servidor')
        }
        if(data)
        {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data)
        }
    
    });

}
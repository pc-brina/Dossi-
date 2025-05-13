document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('input');
    // Pega o primeiro arquivo selecionado
    const arq = input.files[0];
    
    if (arq) {
        const leitor = new FileReader();
        
        leitor.onload = function(e) {
            const conteudo = e.target.result;
            
            // Armazena o conteúdo do XML no localStorage
            localStorage.setItem('uploadedXML', conteudo);
            
            // Redireciona para a página do visualizador
            window.location.href = 'viewer.html';
        };
        // Lê o arquivo como texto
        leitor.readAsText(arq);
    }
});
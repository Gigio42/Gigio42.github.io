document.getElementById('openSidebar').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que o clique no botão propague para o documento
    document.getElementById('sidebar').style.display = 'block';

    // Adiciona um ouvinte de eventos ao documento para fechar a aba lateral ao clicar fora dela
    document.addEventListener('click', closeSidebar);
});

function closeSidebar() {
    document.getElementById('sidebar').style.display = 'none';
    // Remove o ouvinte de eventos após fechar a aba lateral
    document.removeEventListener('click', closeSidebar);
}

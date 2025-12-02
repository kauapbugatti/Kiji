// Seleciona todos os elementos com a classe "pergunta"
const perguntas = document.querySelectorAll('.pergunta');

// Adiciona um evento de clique em cada pergunta
perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        // Encontra o card pai
        const card = pergunta.closest('.card');
        
        // Fecha todos os outros cards
        document.querySelectorAll('.card').forEach(c => {
            if (c !== card) {
                c.classList.remove('ativo');
            }
        });
        
        // Alterna a classe "ativo" para mostrar/ocultar a resposta
        card.classList.toggle('ativo');
    });
});

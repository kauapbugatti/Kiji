function mostrarSecao(id) {
    const secoes = document.querySelectorAll('.conteudo');

    secoes.forEach(secao => {
        if (secao.id === id) {
            secao.classList.add('ativo');
        } else {
            secao.classList.remove('ativo');
        }
    });
}
let secaoAtiva = document.querySelector('.conteudo.ativo');

function mostrarSecao(id) {
    const novaSecao = document.getElementById(id);

    if (novaSecao === secaoAtiva) return; // evita clicar no mesmo botão

    // anima a saída da atual
    secaoAtiva.classList.add('saindo');

    secaoAtiva.addEventListener('animationend', () => {
        secaoAtiva.classList.remove('ativo', 'saindo');
        novaSecao.classList.add('ativo');
        secaoAtiva = novaSecao;
    }, { once: true });
}
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({nome, preco });

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${nome} foi adicionado à sacola!`);
}


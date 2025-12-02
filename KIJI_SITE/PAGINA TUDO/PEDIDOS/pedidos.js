document.addEventListener("DOMContentLoaded", () => {

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const carrinhoDiv = document.getElementById("itensCarrinho");
    const totalDiv = document.getElementById("totalCarrinho");

    // Atualiza a tela com os itens do carrinho e o total
    function atualizarTela() {
        carrinhoDiv.innerHTML = "";
        let total = 0;

        carrinho.forEach((item, index) => {
            const div = document.createElement("div");
            div.classList.add("itemCarrinho");

            div.innerHTML = `
                <div>
                    <h3>${item.nome}</h3>
                    <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                </div>

                <button class="btn-remover" onclick="removerItem(${index})">Remover</button>
            `;

            carrinhoDiv.appendChild(div);
            total += item.preco;
        });

        totalDiv.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    }

    // Exibe os itens ao carregar a página
    atualizarTela();

    // Função global para remover um item do carrinho
    window.removerItem = (index) => {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarTela();
    };

    // Função para finalizar a compra
    window.finalizarCompra = () => {

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        if (carrinho.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        alert("Compra finalizada com sucesso!");

        // Carrega a lista de pedidos ativos
        let pedidosAtivos = JSON.parse(localStorage.getItem("pedidosAtivos")) || [];

        // Cria um novo pedido
        const novoPedido = {
            id: Date.now(),       // Garante ID único
            hora: Date.now(),     // Hora do pedido (início do timer)
            tempoTotal: 60000     // 1 minuto de duração
        };

        // Adiciona o novo pedido à lista
        pedidosAtivos.push(novoPedido);

        // Salva a lista de pedidos ativos no localStorage
        localStorage.setItem("pedidosAtivos", JSON.stringify(pedidosAtivos));

        // Limpa o carrinho de compras
        localStorage.removeItem("carrinho");

        // Redireciona para a página de status
        window.location.href = "../STATUS/status.html";
    };

});

/* --------------------------------------------------------------------------
   GERENCIAMENTO DE ESTADO E INICIALIZAÇÃO
-------------------------------------------------------------------------- */
// Recupera a lista salva no navegador ou inicia um array vazio caso seja o primeiro acesso
let chamados = JSON.parse(localStorage.getItem('chamados')) || [];

// Captura de referências essenciais do DOM para manipulação posterior
const form = document.getElementById('form-chamado');
const listaContainer = document.getElementById('lista-chamados');
const contadorText = document.getElementById('contador-chamados');
const filtroPrioridade = document.getElementById('filtro-prioridade');
const filtroStatus = document.getElementById('filtro-status');

/* --------------------------------------------------------------------------
   FUNÇÕES AUXILIARES E PERSISTÊNCIA
-------------------------------------------------------------------------- */
// Sincroniza o array em memória com o disco local do navegador
function atualizarLocalStorage() {
    localStorage.setItem('chamados', JSON.stringify(chamados));
    atualizarMetricas();
}

// Atualiza os dados numéricos do painel administrativo no topo
function atualizarMetricas() {
    const abertos = chamados.filter(c => c.status === 'aberto').length;
    contadorText.innerText = `Tickets Pendentes: ${abertos} | Total Histórico: ${chamados.length}`;
}

// Higieniza strings para evitar injeção de scripts maliciosos (Segurança XSS)
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

/* --------------------------------------------------------------------------
   OPERAÇÕES CORE DO SISTEMA (CRUD & FILTROS)
-------------------------------------------------------------------------- */
// Captura o evento de envio do formulário para registrar um ticket (CREATE)
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede a página de atualizar automaticamente

    const novoChamado = {
        id: Date.now().toString(), // ID único gerado através do carimbo de data/hora
        titulo: document.getElementById('titulo').value,
        prioridade: document.getElementById('prioridade').value,
        descricao: document.getElementById('descricao').value,
        status: 'aberto'
    };

    chamados.unshift(novoChamado); // Adiciona o elemento no início do array
    atualizarLocalStorage();
    renderizarChamados();
    form.reset(); // Limpa as caixas de texto do formulário
});

// Altera o estado do ticket entre Aberto e Concluído (UPDATE)
function alternarStatus(id) {
    chamados = chamados.map(chamado => {
        if (chamado.id === id) {
            chamado.status = chamado.status === 'aberto' ? 'concluido' : 'aberto';
        }
        return chamado;
    });
    atualizarLocalStorage();
    renderizarChamados();
}

// Remove um registro permanentemente da lista (DELETE)
function excluirChamado(id) {
    chamados = chamados.filter(chamado => chamado.id !== id);
    atualizarLocalStorage();
    renderizarChamados();
}

// Escuta as alterações nas caixas de seleção de filtros
filtroPrioridade.addEventListener('change', renderizarChamados);
filtroStatus.addEventListener('change', renderizarChamados);

// Reconstrói a interface de forma reativa baseada nos filtros ativos (READ)
function renderizarChamados() {
    const pValor = filtroPrioridade.value;
    const sValor = filtroStatus.value;

    // Filtra dados em memória de forma limpa usando funções nativas (.filter)
    let chamadosFiltrados = chamados.filter(chamado => {
        const batePrioridade = pValor === 'todos' || chamado.prioridade === pValor;
        const bateStatus = sValor === 'todos' || chamado.status === sValor;
        return batePrioridade && bateStatus;
    });

    // Se nenhum item bater com os critérios, exibe estado vazio amigável
    if (chamadosFiltrados.length === 0) {
        listaContainer.innerHTML = `<div class="sem-chamados">Nenhum incidente localizado com os filtros selecionados.</div>`;
        return;
    }

    // Mapeia o array transformando dados puros em blocos visuais de HTML (.map)
    listaContainer.innerHTML = chamadosFiltrados.map(chamado => {
        const classeStatus = chamado.status === 'concluido' ? 'status-concluido' : '';
        const textoBotaoConcluir = chamado.status === 'concluido' ? 'Reabrir' : 'Concluir';
        
        let corBorda = 'var(--cor-primaria)';
        if (chamado.prioridade === 'alta') corBorda = 'var(--cor-alta)';
        if (chamado.prioridade === 'media') corBorda = 'var(--cor-media)';
        if (chamado.prioridade === 'baixa') corBorda = 'var(--cor-baixa)';

        return `
            <div class="chamado-card ${classeStatus}" style="border-left: 4px solid ${corBorda}">
                <div class="chamado-header">
                    <div class="chamado-titulo">${escapeHTML(chamado.titulo)}</div>
                    <div class="chamado-meta">
                        <span class="badge badge-${chamado.prioridade}">${chamado.prioridade}</span>
                        <span class="badge" style="background-color: var(--bg-input)">${chamado.status}</span>
                    </div>
                </div>
                <div class="chamado-descricao">${escapeHTML(chamado.descricao)}</div>
                <div class="chamado-acoes">
                    <button class="btn-acao btn-concluir" onclick="alternarStatus('${chamado.id}')">
                        ${textoBotaoConcluir}
                    </button>
                    <button class="btn-acao btn-excluir" onclick="excluirChamado('${chamado.id}')">
                        Excluir
                    </button>
                </div>
            </div>
        `;
    }).join(''); // Converte o array resultante em uma string unificada
}

/* --------------------------------------------------------------------------
   START DA APLICAÇÃO
-------------------------------------------------------------------------- */
// Dispara o carregamento inicial ao carregar a página na tela
renderizarChamados();
atualizarMetricas();

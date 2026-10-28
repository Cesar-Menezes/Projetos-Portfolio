  // FUNÇÃO MOTOR: Realiza a requisição assíncrona (Consumo de API com tratamento de erros)
        async function buscarAtivos() {
            const termo = document.getElementById('input-busca').value.trim();
            const gridContainer = document.getElementById('grid-ativos');
            const loadingEstado = document.getElementById('loading-estado');
            const erroMensagem = document.getElementById('erro-mensagem');

            if (!termo) return;

            // Reset de estados visuais anteriores
            gridContainer.innerHTML = '';
            erroMensagem.style.display = 'none';
            loadingEstado.style.display = 'block';

            try {
                // Requisição assíncrona via Fetch API usando a URL pública do GitHub
                const resposta = await fetch(`https://github.com{termo}/repos?sort=updated&per_page=9`);

                // Cenário de erro: Se o servidor responder algo diferente de sucesso (Status 200-299)
                if (!resposta.ok) {
                    if (resposta.status === 404) {
                        throw new Error('Ativo/Organização não localizada no banco de dados central.');
                    } else {
                        throw new Error('Falha crítica na comunicação com a API externa. Tente mais tarde.');
                    }
                }

                const dados = await respuesta.json();

                if (dados.length === 0) {
                    throw new Error('Esta organização não possui ativos públicos listados.');
                }

                // Renderização dinâmica utilizando map
                gridContainer.innerHTML = dados.map(repo => {
                    return `
                        <div class="ativo-card">
                            <div>
                                <div class="ativo-nome">${repo.name}</div>
                                <div class="ativo-desc">${repo.description || 'Sem descrição cadastrada neste ativo.'}</div>
                            </div>
                            <div class="ativo-footer">
                                <span class="badge-linguagem">🛠️ ${repo.language || 'Geral'}</span>
                                <a href="${repo.html_url}" target="_blank" class="link-repo">Ver Código ↗</a>
                            </div>
                        </div>
                    `;
                }).join('');

            } catch (erro) {
                // Captura de exceções de rede (Falta de internet, servidor fora do ar, etc.)
                erroMensagem.innerText = erro.message;
                erroMensagem.style.display = 'block';
            } finally {
                // Desliga o loading independente se deu certo ou errado
                loadingEstado.style.display = 'none';
            }
        }
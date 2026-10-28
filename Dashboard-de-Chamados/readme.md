# 🔍 Hub de Auditoria de Ativos - API Integration

Uma aplicação de engenharia de dados client-side voltada para a consulta e auditoria de infraestruturas e repositórios em tempo real, utilizando requisições assíncronas em JavaScript Vanilla conectadas diretamente à REST API pública do GitHub.

---

## 🎯 O Problema & A Solução (Visão de Negócio)

**Problema:** Gestores e analistas de TI precisam auditar rapidamente as stacks de tecnologia, documentações e modificações recentes em ativos de código aberto ou repositórios corporativos externos, sem a necessidade de instalar ferramentas locais pesadas de terminal.

**Solução:** O *Hub de Auditoria de Ativos* fornece uma interface reativa e veloz onde o técnico insere o nome de qualquer usuário ou organização de tecnologia (ex: google, facebook) e o sistema mapeia os ativos mais recentes diretamente dos servidores centrais, tratando oscilações e quedas de conexão.

---

## 🚀 Engenharia de Software Aplicada (O que foi validado)

Este projeto demonstra o domínio de **comunicação assíncrona com servidores externos**, provando que a aplicação é resiliente e sabe lidar com o fluxo de dados vindos da internet. Seguindo a metodologia de desenvolvimento acelerado por IA, o foco técnico concentrou-se na robustez das requisições e na experiência do usuário sob latência de rede.

### 🧠 Competências Técnicas Demonstradas:
*   **JavaScript Assíncrono (Async/Await):** Utilização das features modernas do ES6+ para gerenciar requisições paralelas sem bloquear a thread principal da aplicação, garantindo uma interface fluida.
*   **Consumo Avançado de APIs (Fetch API):** Integração via HTTP com endpoints REST reais, manipulando respostas no formato JSON e renderizando os dados dinamicamente em tela.
*   **Tratamento de Erros Resiliente (Try/Catch/Throw):** Captura explícita de falhas de rede e tratamento de códigos de status HTTP (como erro 404 para ativos inexistentes ou falhas 500), impedindo o colapso da aplicação e exibindo alertas amigáveis na interface.
*   **Controle de Estados Visuais (Loading UX):** Gerenciamento reativo de componentes de interface durante o tempo de resposta do servidor, ativando um indicador visual de carregamento (*spinner*) e limpando os estados anteriores a cada nova consulta.
*   **Layout Adaptável em Grid Dinâmico:** Uso de CSS Grid com funções inteligentes (`repeat(auto-fill, minmax(...))`) para criar uma exibição de cards que se auto-ajusta perfeitamente ao tamanho da tela (Responsividade Nativa).

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5** (Estruturação semântica e acessível)
*   **CSS3** (Design minimalista, animações de loading e CSS Grid)
*   **JavaScript Vanilla** (Fetch API, Async/Await, Tratamento de Exceções)
*   **REST API do GitHub** (Provedor real de dados de infraestrutura)

---

## 📂 Estrutura do Projeto

```text
├── monitor.html  # Estruturação e vinculação de estados visuais
├── style.css     # Animações, responsividade automática e temas dark
├── script.js     # Motores assíncronos, blocos try/catch e consumo de API
└── README.md     # Documentação da integração de dados do projeto
```

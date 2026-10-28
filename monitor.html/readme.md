# 🛠️ Core-IT Panel - Sistema de Gestão de Incidentes e Chamados Técnicos

Uma aplicação web responsiva voltada para a otimização de fluxos de suporte em TI, operando com arquitetura modular, persistência de dados local e manipulação reativa da interface com JavaScript Vanilla.

---

## 🎯 O Problema & A Solução (Visão de Negócio)

**Problema:** Equipes de suporte de TI frequentemente sofrem com a falta de centralização e triagem de incidentes operacionais de rotina, gerando gargalos na resolução de problemas de infraestrutura críticos.

**Solução:** O *Core-IT Panel* centraliza os tickets de suporte diretamente no navegador do técnico, permitindo a triagem imediata de prioridades com base na severidade do impacto técnico (Baixa, Média, Alta) e fornecendo filtros dinâmicos de status para garantir que nenhum bloqueio operacional seja esquecido.

---

## 🚀 Engenharia de Software Aplicada (O que foi validado)

Este projeto foi desenvolvido utilizando a abordagem de **Solucionador de Problemas**, onde ferramentas de IA Generativa foram integradas ao fluxo de trabalho para acelerar a escrita mecânica do código, permitindo foco total na arquitetura da solução e nas boas práticas.

### 🧠 Competências Técnicas Demonstradas:
*   **Manipulação Reativa do DOM:** Atualizações de tela em tempo real disparadas por eventos de interface (`addEventListener`), injetando componentes HTML dinamicamente sem necessidade de recarregamento.
*   **Gerenciamento de Estado de Dados (CRUD):** Implementação completa das operações de Criação (registro de chamado), Leitura (exibição estruturada), Atualização (conclusão/reabertura) e Deleção de incidentes técnicos.
*   **Programação Funcional & Manipulação de Arrays:** Uso intensivo de métodos nativos do ECMAScript+ como `.map()` para renderização limpa de componentes e `.filter()` para processamento reativo de múltiplos critérios de filtragem simultâneos.
*   **Persistência de Dados Offline:** Utilização segura da API de `LocalStorage` para serialização de dados (JSON), garantindo resiliência e persistência das informações mesmo após o fechamento do navegador.
*   **Layout Moderno & Fluido:** Arquitetura CSS estruturada com **CSS Grid** para a malha macro (Sidebar/Navbar/Main) e **Flexbox** para componentes flexíveis internos, respeitando a filosofia de design Mobile-First.
*   **Segurança (Defesa XSS):** Implementação de sanitização de strings via função de *escaping*, impedindo quebras de layout ou injeção de scripts maliciosos através dos campos de formulário.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5** (Semântico e estruturado)
*   **CSS3** (Variáveis nativas, CSS Grid Layout, Flexbox)
*   **JavaScript Vanilla** (ES6+, Programação funcional, LocalStorage)

---

## 📂 Estrutura do Projeto

O projeto adota uma arquitetura limpa de separação de responsabilidades (Separation of Concerns), facilitando a manutenção contínua do software:

```text
├── index.html   # Estruturação e semântica dos elementos visuais
├── style.css    # Gerenciamento de design, layout adaptável e variáveis
├── script.js   # Motores lógicos, controle de estado e persistência local
└── README.md    # Documentação técnica do ecossistema do projeto
```

---

## 🏁 Como Rodar a Aplicação

Por operar puramente no lado do cliente (Client-Side), o projeto não requer nenhuma dependência, compiladores ou servidores Node.js:

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Dê um duplo clique no arquivo `index.html` para abrir diretamente no seu navegador de preferência.

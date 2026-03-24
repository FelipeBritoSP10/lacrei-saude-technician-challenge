# 🏥 Lacrei Saúde - Desafio Técnico (Frontend)

Este projeto é uma aplicação moderna desenvolvida para o processo seletivo da **Lacrei Saúde**. O objetivo é oferecer uma interface de alta performance, acessível e responsiva, conectando usuários a profissionais de saúde de forma inclusiva.

---

## 🚀 Tecnologias Utilizadas

A escolha das tecnologias foi pautada em **escalabilidade, manutenção e performance**:

* **Next.js 15+ (App Router):** Utilizado para garantir roteamento eficiente e suporte nativo a Server Components.
* **React 19:** Aproveitando os hooks mais recentes para gerenciamento de estado e efeitos.
* **Styled Components:** Implementado para garantir o isolamento de estilos (CSS-in-JS) e facilitar a criação de um Design System consistente.
* **TypeScript:** Tipagem estática para reduzir bugs em tempo de execução e melhorar a experiência de desenvolvimento.
* **Acessibilidade (WCAG):** Foco em semântica HTML e atributos ARIA.

---

## 🧠 Decisões Técnicas e Arquitetura

### 1. Atomic Design & Componentização
A estrutura de pastas foi organizada para separar componentes globais (Header, Footer) de seções específicas da página (Hero, Services). Isso facilita a reutilização e o isolamento de lógica.

### 2. Acessibilidade (A11y) como Prioridade
Conforme solicitado pelo desafio, a aplicação foi construída pensando em leitores de tela e navegação via teclado:
* Uso de tags semânticas (`<nav>`, `<header>`, `<main>`, `<footer>`).
* Atributos `aria-label` em botões e links de navegação.
* Contraste de cores validado para garantir legibilidade.

### 3. UI/UX & Design System
* **Glassmorphism:** Aplicação de efeitos de transparência moderna no Header.
* **Responsividade:** Layout adaptável para Mobile, Tablet e Desktop utilizando Media Queries do Styled Components.
* **Tema Centralizado:** Uso do `ThemeProvider` para gerenciar cores, espaçamentos e fontes em um único local (`src/styles/theme.ts`).

---

## 🔄 Estratégia de Rollback (Requisito Obrigatório)

Para garantir a resiliência da aplicação em ambiente de produção (Vercel/Cloud), adotamos as seguintes estratégias de recuperação:

1.  **Vercel Instant Rollback:** Em caso de detecção de bugs críticos após o deploy, utilizaremos a função **"Promote to Production"** no dashboard da Vercel. Isso permite que a última build estável assuma o tráfego em menos de 30 segundos, sem necessidade de recompilação.
2.  **Git Revert Strategy:** Caso a correção exija uma alteração estrutural no código, será executado o comando `git revert [hash_do_commit]`. Isso gera um novo commit de compensação, mantendo a integridade do histórico de auditoria do Git e disparando automaticamente o pipeline de CI/CD para restaurar a estabilidade.

---

## 🛠️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/lacrei-saude-challenge.git](https://github.com/seu-usuario/lacrei-saude-challenge.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    [http://localhost:3000](http://localhost:3000)

---

Desenvolvido por **Felipe Amaro Brito Da Silva**
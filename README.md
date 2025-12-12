# 🎮 Quiz Interativo - Dual Mode Quiz Application

![Quiz Banner](file:///C:/Users/flavio/.gemini/antigravity/brain/faf78051-535c-427c-8056-9c8eaa7f001b/quiz_banner_1765578620814.png)

> **Uma aplicação web moderna de quiz com dois modos de jogo: perguntas personalizadas sobre Danki Code e perguntas aleatórias de conhecimentos gerais via API.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![API](https://img.shields.io/badge/API-Open_Trivia_DB-764ba2?style=for-the-badge)](https://opentdb.com/)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Destaques Técnicos](#-destaques-técnicos)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

O **Quiz Interativo** é uma aplicação web desenvolvida com HTML, CSS e JavaScript puro que oferece uma experiência de quiz dinâmica e envolvente. O projeto apresenta um sistema de **dois modos de jogo**:

- **🎓 Quiz Danki Code**: 5 perguntas personalizadas sobre programação e Danki Code com input de texto
- **🌍 Quiz Geral**: Perguntas aleatórias de conhecimentos gerais via API com múltipla escolha

O projeto foi desenvolvido como parte do curso de C# da Danki Code, evoluindo de um quiz console em C# para uma aplicação web completa e moderna.

---

## 🎬 Demonstração

### Menu de Seleção

![Menu de Seleção](file:///C:/Users/flavio/.gemini/antigravity/brain/faf78051-535c-427c-8056-9c8eaa7f001b/quiz_menu_mockup_1765578250068.png)

_Tela inicial com dois modos de jogo disponíveis_

### Quiz de Múltipla Escolha

![Quiz Geral](file:///C:/Users/flavio/.gemini/antigravity/brain/faf78051-535c-427c-8056-9c8eaa7f001b/quiz_multiple_choice_1765578266609.png)

_Perguntas aleatórias com 4 opções de resposta_

---

## ✨ Funcionalidades

### 🎮 Sistema Dual Mode

- Menu interativo para seleção de modo de jogo
- Transições suaves entre telas
- Navegação intuitiva

### 🎓 Quiz Danki Code

- 5 perguntas personalizadas sobre programação
- Input de texto livre
- Validação inteligente:
  - Números inteiros
  - Números decimais com tolerância (Math.Abs)
  - Texto case-sensitive

### 🌍 Quiz Geral

- Integração com **Open Trivia Database API**
- Perguntas aleatórias a cada jogo
- 4 opções de múltipla escolha
- Respostas embaralhadas
- Loading spinner durante carregamento

### 🎨 Design Moderno

- Gradiente animado no background
- Glassmorphism nos cards
- Animações suaves (slide-in, fade-in, bounce)
- Hover effects interativos
- Feedback visual colorido (verde/vermelho)

### 📱 Responsivo

- Design adaptável para desktop, tablet e mobile
- Grid responsivo para cards
- Botões full-width em telas pequenas

### 🏆 Sistema de Pontuação

- Cálculo automático de pontos
- Mensagens personalizadas baseadas no desempenho
- Tela de resultados animada

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
  - Flexbox & Grid Layout
  - Animações CSS (@keyframes)
  - Gradientes e Glassmorphism
  - Media Queries para responsividade
- **JavaScript (ES6+)** - Lógica e interatividade
  - Async/Await para requisições API
  - DOM Manipulation
  - Event Listeners
  - Array Methods (map, filter, shuffle)

### API

- **[Open Trivia Database](https://opentdb.com/)** - API gratuita de perguntas
  - Sem necessidade de chave API
  - Retorna JSON
  - Múltiplas categorias e dificuldades

### Tipografia

- **[Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)** - Fonte moderna e legível

---

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexão com internet (para Quiz Geral)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/quiz-interativo.git
```

2. Navegue até a pasta do projeto:

```bash
cd quiz-interativo
```

3. Abra o arquivo `index.html` no navegador:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Como Jogar

1. **Escolha o modo** na tela inicial:

   - 🎓 Quiz Danki Code
   - 🌍 Quiz Geral

2. **Responda as perguntas**:

   - Digite a resposta (Quiz Danki Code)
   - Clique na opção correta (Quiz Geral)

3. **Veja seu resultado** ao final

4. **Volte ao menu** para jogar novamente

---

## 📁 Estrutura do Projeto

```
quiz-interativo/
│
├── index.html          # Estrutura HTML
├── style.css           # Estilos e animações
├── script.js           # Lógica do quiz e integração API
└── README.md           # Documentação
```

### Arquivos Principais

#### `index.html`

- Menu de seleção de modo
- Loading spinner
- Container do quiz
- Opções de múltipla escolha
- Tela de resultados

#### `style.css` (420+ linhas)

- Reset e estilos globais
- Gradiente animado no background
- Estilos do menu e cards
- Animações (@keyframes)
- Loading spinner
- Botões de múltipla escolha
- Media queries para responsividade

#### `script.js` (300+ linhas)

- Sistema de modos (Danki/Geral)
- Integração com Open Trivia DB API
- Validação de respostas
- Renderização de opções
- Navegação entre telas
- Cálculo de pontuação

---

## 💡 Destaques Técnicos

### 🔌 Integração com API

```javascript
async function loadAPIQuestions() {
    const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
    const data = await response.json();

    questions = data.results.map(q => ({
        question: decodeHTML(q.question),
        correctAnswer: decodeHTML(q.correct_answer),
        options: shuffleArray([...])
    }));
}
```

### 🎨 Animações CSS

```css
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.mode-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.3);
}
```

### 🎯 Validação Inteligente

```javascript
// Validação com tolerância para floats
if (question.type === "float") {
  const userFloat = parseFloat(userAnswer);
  const correctFloat = parseFloat(question.answer);
  isCorrect = Math.Abs(userFloat - correctFloat) < 0.01;
}
```

### 🔀 Embaralhamento de Opções

```javascript
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
```

---

## 🎨 Paleta de Cores

| Cor         | Hex       | Uso                 |
| ----------- | --------- | ------------------- |
| Roxo        | `#667eea` | Gradiente principal |
| Violeta     | `#764ba2` | Gradiente principal |
| Verde       | `#d4edda` | Feedback correto    |
| Vermelho    | `#f8d7da` | Feedback incorreto  |
| Cinza Claro | `#f5f7fa` | Background cards    |

---

## 📊 Estatísticas do Projeto

- **Linhas de Código**: ~1000+
- **Arquivos**: 3 (HTML, CSS, JS)
- **Animações CSS**: 5
- **Funções JavaScript**: 15+
- **Perguntas Danki Code**: 5
- **Perguntas API**: Ilimitadas

---

## 🎓 Aprendizados

Este projeto me permitiu desenvolver e aprimorar habilidades em:

- ✅ Manipulação avançada do DOM
- ✅ Consumo de APIs REST com Fetch
- ✅ Async/Await e Promises
- ✅ CSS Grid e Flexbox
- ✅ Animações e transições CSS
- ✅ Design responsivo
- ✅ UX/UI Design
- ✅ Tratamento de erros
- ✅ Validação de dados
- ✅ Organização de código

---

## 🚀 Possíveis Melhorias Futuras

- [ ] Sistema de ranking/leaderboard
- [ ] Timer para cada pergunta
- [ ] Categorias personalizadas para Quiz Geral
- [ ] Níveis de dificuldade
- [ ] Modo multiplayer
- [ ] Salvar histórico de pontuações (LocalStorage)
- [ ] Compartilhamento de resultados em redes sociais
- [ ] Modo escuro/claro
- [ ] Sons e efeitos sonoros
- [ ] Tradução para outros idiomas

---

## 👨‍💻 Autor

**Seu Nome**

- LinkedIn: [seu-linkedin](https://linkedin.com/in/seu-perfil)
- GitHub: [seu-github](https://github.com/seu-usuario)
- Email: seu-email@exemplo.com

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **Danki Code** - Pelo curso de C# que inspirou este projeto
- **Open Trivia Database** - Pela API gratuita de perguntas
- **Google Fonts** - Pela fonte Poppins

---

<div align="center">

### ⭐ Se você gostou deste projeto, deixe uma estrela!

**Desenvolvido com 💜 e muito ☕**

</div>

# Marvel Comics Store - README

## 📝 Descrição do Projeto
Front-end de uma loja virtual de quadrinhos da Marvel desenvolvido como desafio técnico para a NeoApp, com:
- Listagem paginada de HQs
- Páginas de detalhes dos produtos
- Carrinho com sistema de cupons
- Layout responsivo mobile-first

## ✅ Requisitos Implementados (PDF)

### 🏗️ Estrutura Básica
- [x] React + TypeScript + Vite
- [x] Styled Components com Tailwind CSS
- [x] Componentização dos elementos
- [x] Layout responsivo (mobile-first)

### 🛒 Funcionalidades do Carrinho
- [x] Adição/remoção de itens
- [x] Ajuste de quantidades
- [x] Cálculo automático de subtotal
- [x] Sistema de cupons de desconto:
  - Cupons comuns (15% de desconto)
  - Cupons raros (10% de desconto)
- [x] Validação de cupons por tipo de HQ

### 🖼️ Páginas Implementadas
1. **Home**
   - Seção Welcome com CTA
   - Destaque de produtos
   - Seção About

2. **Catálogo (All Comics)**
   - Grid responsivo
   - Paginação
   - Filtro de busca

3. **Detalhes do Produto**
   - Galeria de imagens
   - Informações detalhadas
   - Quadrinhos relacionados

4. **Carrinho**
   - Listagem de itens
   - Aplicação de cupons
   - Resumo do pedido

## 🛠️ Tecnologias Utilizadas

### Core
- React 18
- TypeScript
- Vite

### Estilização
- Tailwind CSS
- Framer Motion (animações)
- React Icons

### Gerenciamento de Estado
- Context API
- React Router

### Testes
- Cypress (testes E2E)

## 🏗️ Estrutura de Arquivos

```
src/
├── api/                  # Serviços de API
├── assets/               # Imagens e recursos estáticos
├── components/           # Componentes reutilizáveis
├── contexts/             # Gerenciamento de estado
├── hooks/                # Hooks customizados
├── pages/                # Páginas da aplicação
├── types/                # Tipos TypeScript
├── utils/                # Funções utilitárias
├── App.tsx
└── main.tsx
```

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Preencha com suas chaves da API Marvel
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Para build de produção:
```bash
npm run build
```

## 🧪 Testes

Execute os testes E2E com Cypress:
```bash
npm run cypress:open
```

## 💡 Diferenciais Implementados

### Além do PDF
- Animações com Framer Motion
- Feedback visual ao adicionar itens
- Persistência do carrinho no localStorage
- Loaders e estados de carregamento
- Tratamento de erros da API

### Cupons Válidos (Conforme PDF)
**Cupons Comuns (15% desconto):**
- `COMUM15`
- `HEROIS25`

**Cupons Raros (10% desconto):**
- `RARO10`
- `MARVEL20`

## 📌 Próximos Passos

1. Implementar autenticação de usuários
2. Conectar com backend real
3. Adicionar mais testes E2E
4. Implementar avaliação de produtos

## 📧 Contato

Desenvolvido por [Seu Nome]  
Email: [seu@email.com]  
GitHub: [@seuusername]
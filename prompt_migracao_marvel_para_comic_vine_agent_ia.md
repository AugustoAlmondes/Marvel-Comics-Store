# Prompt para o Agent de IA

Você deve atuar como um engenheiro de software responsável por migrar um projeto que atualmente utiliza a API da Marvel (`https://gateway.marvel.com/v1/public`) para a API da Comic Vine.

O objetivo é substituir apenas a camada de integração da API, preservando completamente:
- layout
- componentes
- rotas
- estados
- nomes das props
- comportamento visual
- funcionalidades já existentes
- lógica de busca, paginação, favoritos, filtros e detalhes

Não refatore partes não relacionadas à API.

## Contexto

A chave da nova API já está disponível no arquivo `.env`:

```env
VITE_COMIC_VINE_KEY=...
```

A API da Comic Vine deverá ser consumida usando:

```ts
const API_KEY = import.meta.env.VITE_COMIC_VINE_KEY
```

Base URL:

```ts
https://comicvine.gamespot.com/api
```

A Comic Vine exige:
- parâmetro `api_key`
- parâmetro `format=json`
- em muitos endpoints, uso de JSONP ou proxy por causa de CORS

Antes de alterar qualquer componente, identifique como o projeto atualmente acessa a API da Marvel:
- arquivos de service
- hooks
- utilitários
- stores
- context
- chamadas diretas com `fetch` ou `axios`

Mapeie todos os locais onde existe:
- `gateway.marvel.com`
- `apikey`
- `hash`
- `ts`
- tipos específicos da Marvel
- interfaces tipadas para respostas da Marvel

## Etapas obrigatórias

### 1. Encontrar toda a camada da Marvel

Analise componente por componente e liste:
- qual endpoint da Marvel é usado
- quais dados do retorno são consumidos
- quais propriedades realmente são utilizadas na interface

Exemplo:

```ts
character.name
character.description
character.thumbnail.path
character.thumbnail.extension
character.id
```

Depois identifique o equivalente na Comic Vine.

## Equivalência entre Marvel e Comic Vine

Use este mapeamento sempre que possível:

| Marvel | Comic Vine |
|--------|--------|
| `id` | `id` |
| `name` | `name` |
| `description` | `deck` ou `description` |
| `thumbnail.path + '.' + extension` | `image.original_url` |
| `comics.items` | `issues` |
| `series.items` | `series` |
| `urls[0].url` | `site_detail_url` |

Se algum componente usa imagem pequena, utilize:

```ts
image.small_url
```

Se usa imagem grande:

```ts
image.original_url
```

## 2. Atualizar services

Substitua todas as funções da Marvel por funções equivalentes da Comic Vine.

Exemplo de endpoint para personagens:

```ts
GET https://comicvine.gamespot.com/api/characters/
```

Exemplo de busca:

```ts
GET https://comicvine.gamespot.com/api/search/?api_key=KEY&format=json&query=batman&resources=character
```

Crie ou adapte um arquivo central semelhante a:

```ts
// services/comicVineApi.ts
import axios from 'axios'

export const comicVineApi = axios.create({
  baseURL: 'https://comicvine.gamespot.com/api',
  params: {
    api_key: import.meta.env.VITE_COMIC_VINE_KEY,
    format: 'json',
  },
})
```

Caso o projeto já possua `marvelApi.ts`, substitua o conteúdo sem alterar a forma como os componentes importam esse service, se isso evitar mudanças maiores.

## 3. Adaptar tipos e interfaces

Substitua interfaces da Marvel por novas interfaces da Comic Vine.

Exemplo:

```ts
interface ComicVineCharacter {
  id: number
  name: string
  deck?: string
  description?: string
  image?: {
    original_url?: string
    small_url?: string
  }
  site_detail_url?: string
}
```

Se os componentes esperam um formato antigo da Marvel, prefira criar uma função adaptadora.

Exemplo:

```ts
function mapComicVineCharacter(character: ComicVineCharacter) {
  return {
    id: character.id,
    name: character.name,
    description: character.deck || character.description || '',
    thumbnail: {
      path: character.image?.original_url || '',
      extension: '',
    },
    url: character.site_detail_url,
  }
}
```

A estratégia preferida é:
- manter os componentes intactos
- transformar a resposta da Comic Vine para o formato antigo esperado

Assim as mudanças ficam concentradas apenas na camada da API.

## 4. Corrigir CORS

Se houver erro de CORS ao acessar a Comic Vine diretamente no front-end:

- verificar se o projeto já usa proxy no Vite
- caso não use, criar uma solução mínima no `vite.config.ts`

Exemplo:

```ts
server: {
  proxy: {
    '/api/comicvine': {
      target: 'https://comicvine.gamespot.com/api',
      changeOrigin: true,
      rewrite: path => path.replace('/api/comicvine', ''),
    },
  },
}
```

E atualizar os services para consumir:

```ts
/api/comicvine
```

Não implemente backend separado, a menos que seja absolutamente necessário.

## 5. Validar funcionalidades existentes

Depois da migração, confira se continuam funcionando:

- listagem de personagens
- busca
- paginação
- tela de detalhes
- carregamento de imagem
- estados de loading
- mensagens de erro
- fallback quando não existir descrição ou imagem

Se algum dado da Comic Vine não existir, adicione fallback seguro sem quebrar o componente.

Exemplo:

```ts
character.description || 'Descrição não disponível.'
```

## Restrições

- Não alterar CSS, Tailwind ou estrutura visual
- Não renomear componentes sem necessidade
- Não remover funcionalidades
- Não reescrever arquivos inteiros se apenas alguns trechos precisam mudar
- Não modificar código que não tenha relação com a API
- Priorize pequenas mudanças e baixo risco

## Resultado esperado

Ao final:
1. Liste todos os arquivos alterados
2. Explique rapidamente o que mudou em cada um
3. Mostre trechos de código importantes
4. Aponte qualquer limitação restante da Comic Vine em comparação com a Marvel
5. Caso exista algo impossível de migrar exatamente, implemente a alternativa mais próxima sem quebrar a UX


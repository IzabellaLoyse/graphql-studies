# GraphQl - Graph Query Language (Linguagem de Consulta de Dados em Grafos )

- GraphQL é uma linguagem de consulta para sua API e um tempo de execução do lado do servidor para executar consultas usando um sistema de tipo que você define para sua dados.

- O GraphQL não está vinculado a nenhum banco de dados ou mecanismo de armazenamento específico e, em vez disso, é apoiado pelo código e pelos dados existentes.

## Queries and Mutations

### Fields

- Na sua forma mais simples, o GraphQL é sobre pedir campos específicos em objetos.

Consulta

```
{
  hero {
    name
  }
}

```

Retorno da consulta

```
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}

```

- Você pode ver imediatamente que a consulta tem exatamente a mesma forma que o resultado.
- Isso é essencial para o GraphQL, porque você sempre recebe de volta o que espera, e o servidor sabe exatamente quais campos o cliente está pedindo.

### Arguments

- Se a única coisa que pudéssemos fazer fosse atravessar objetos e seus campos, o GraphQL já seria uma linguagem muito útil para a busca de dados.

```
query GET_USER {
 user(id: "812") {
   id
   userName
   firstName
 }
}

```

Retorno

```
{
  "data": {
    "user": {
      "id": "812",
      "userName": "heloisa.albuquerque",
      "firstName": "Heloísa"
    }
  }
}

```

### Variables

- Passando argumentos dinâmicos por meio de variáveis

```
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}

```

Variáveis

```
{
  "episode": "JEDI"
}

```

Retorno

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}

```

### Aliases

- Você deve ter notado que, como os campos de objeto de resultado correspondem ao nome do campo na consulta, mas não incluem argumentos, você não pode consultar diretamente o mesmo campo com argumentos diferentes.
- É por isso que você precisa de aliases - eles permitem que você renomeie o resultado de um campo para o que quiser.

```
query GET_POST {
 post860: post(id: "860") {
    id
    title
  }

   post(id: "342") {
    id
    title
  }
}

```

Retorno

```
{
  "data": {
    "post860": {
      "id": "860",
      "title": "Et voluptatem nulla omnis et iusto ullam."
    },
    "post": {
      "id": "342",
      "title": "Maiores ex tempore quo qui."
    }
  }
}

```

### Fragments

- Os fragmentos permitem construir conjuntos de campos e, em seguida, incluí-los em consultas onde você precisa.

```
fragment post on Post {
  id
  title
  body
  createdAt
  indexRef
  unixTimestamp
}

query GET_POST {
 post860: post(id: "860") {
    id
    title
  }

   post(id: "342") {
    ...post
  }
}

```

## Scalar Types

- São os tipos primitivos de dados no GraphQl
- ID
- String
- Int
- Float
- Boolean

- O **!** representa que o campo não pode ser nulo

```
 gql`
    type Query {
      id: ID!
      name: String
      age: Int
      average_age: Float
      married: Boolean
    }
  `,

  Query: {
      id: () => '123gdd',
      name: () => 'iza',
      age: () => 22,
      average_age: () => 2,
      married: () => false,
    },

```

## Object Types (Custom Types)

- Tipos no qual eu posso definir e criar

```
 typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      name: String
    }
  `,

  resolvers: {
    Query: {
      user: () => ({
        id: '123fgd',
        name: 'iza',
      }),
      users: () => [
        {
          id: '123fgd',
          name: 'iza',
        },
        {
          id: '123fgdgtgtg',
          name: 'jade',
        },
      ],
    },
  },

```

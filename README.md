
# RUMA

  

## Introdução

  

Aplicação construída com ReactJs, Contentful para gerenciamento de conteúdo e Firebase Realtime Database para armazenamento de dados em tempo real.

  

## Configuração Local

  

Para executar este projeto localmente, siga os passos abaixo:

  

1. Clone o repositório:

```

git clone https://github.com/osCappuccinos/Projeto-II.git

cd Projeto-II

npm install

npm start

```

  

### Construindo a Interface com ReactJs

  

A interface do usuário da RUMA é construída usando o ReactJs, um biblioteca JavaScript para criar interfaces de usuário de forma eficiente e com bom desempenho.

  

-  **Componentização:** A aplicação é dividida em componentes reutilizáveis, que representam partes da interface, como barras de navegação, listas de produtos e formulários.

-  **Estado e Props:** Utilizamos o estado (useState) e propriedades (props) para gerenciar dados e comportamentos dentro dos componentes, permitindo que a interface reaja dinamicamente às ações dos usuários.

-  **Rotas:** Com o React Router, definimos rotas para navegação entre diferentes páginas e vistas dentro da aplicação, como a página inicial, a lista de produtos e o carrinho de compras.

  

### Uso e Integração com Contentful e Firebase

  

A aplicação faz uso do CMS Contentful para gerenciar o conteúdo dos produtos e do Firebase Realtime Database para gerenciar dados dinâmicos, como informações dos usuários e pedidos.

  

-  **Contentful:** A aplicação integra com o CMS Contentful para gerenciar o conteúdo dos produtos e das lojas. A configuração é feita através de um cliente Contentful criado com as credenciais do espaço e token de acesso. O cliente é usado em várias funções para buscar e processar dados.

  

-  **Firebase:** A aplicação RUMA utiliza um conjunto de funções no controlador do Firebase Realtime Database para gerenciar todas as operações de CRUD necessárias para usuários, clientes, produtos, avaliações e pedidos. Cada função está projetada para:

  

1.  **Gerenciar Usuários e Clientes:** Criação, leitura, atualização e exclusão de usuários e clientes.

2.  **Operações na Sacola de Compras:** Adicionar, ler, atualizar quantidades e remover produtos da sacola de compras de um cliente.

3.  **Gerenciamento de Favoritos:** Adicionar produtos aos favoritos, ler favoritos e remover um produto dos favoritos.

4.  **Administração de Produtos:** Criação de produtos, leitura de todos os produtos ou de um produto específico, atualização e exclusão de produtos.

5.  **Avaliações de Produtos:** Criação e leitura de avaliações, atualização e exclusão de uma avaliação.

6.  **Estoque de Produtos:** Gerenciamento do inventário de um produto.

7.  **Pedidos:** Gerenciamento completo dos pedidos, desde a criação até a leitura, atualização e exclusão.

8.  **Entregas:** Gerenciamento dos dados de entrega associados a um pedido.

9.  **Lojas:** Criação de lojas, leitura de informações da loja, atualização e exclusão de lojas.

10.  **Produtos da Loja:** Adicionar, ler, atualizar e remover produtos de uma loja específica.

  
  

-  **Integração:** Mantemos os mesmos IDs para produtos no Contentful e no Firebase, permitindo que os dados sejam integrados e acessados de forma sincronizada no front-end.

  

### Algoritmo de Recomendação

  

O algoritmo de recomendação melhora a experiência do usuário sugerindo produtos altamente avaliados. O mecanismo é baseado na função `fetchTopRatedProducts`, que opera da seguinte maneira:

  

1.  **Consulta de Produtos Avaliados:** Uma consulta ao Firebase Realtime Database é feita para buscar produtos com base em suas avaliações médias.

2.  **Ordenação e Limite:** Os produtos são ordenados pelo campo `averageRating` e o número de resultados é limitado pelo parâmetro `limit`.

3.  **Resultado da Consulta:** A função `get` executa a consulta e retorna os produtos mais bem avaliados até o limite especificado.

4.  **Resposta da Função:** Os produtos são então retornados através de uma função de callback para serem utilizados pela aplicação.

5.  **Tratamento de Erros:** A função também trata possíveis erros, retornando-os via callback caso ocorram.

  
  

### Barra de Busca

  

A barra de busca é uma funcionalidade-chave que permite aos usuários encontrar produtos rapidamente na aplicação. O mecanismo de busca interage com o Firebase Realtime Database usando o seguinte processo:

  

1.  **Limpeza e Preparação:** O termo de busca inserido pelo usuário é limpo (trim) e convertido para minúsculas para garantir consistência na busca.

2.  **Validação:** Se o termo de busca estiver vazio ou for muito curto (um único caractere), a busca é interrompida e retorna uma lista vazia, evitando buscas desnecessárias.

3.  **Consulta ao Firebase:** Fazemos uma consulta ao Firebase Realtime Database para buscar todos os produtos.

4.  **Filtragem de Resultados:** Os produtos são filtrados para encontrar aqueles cujos nomes contêm o termo de busca.

5.  **Verificação de Erros:** Se nenhum produto for encontrado ou se houver algum problema com os dados do produto (por exemplo, nome do produto ausente), um erro é registrado.

6.  **Resposta:** Os resultados finais, incluindo o nome da loja, são retornados para a aplicação cliente.

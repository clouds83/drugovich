# Teste Frond-end Angular - Claudio

Link do teste hospedado: https://drugovich-teste-front.vercel.app/

Observação: O link da mock API não estava funcionando, então eu criei um usando o mesmo serviço.
O link da mock API usada foi o: https://demo4529396.mockable.io/clients

## Tela de adição de clientes
Apesar de eu ter criado o HTML/CSS da segunda tela, de adição de clientes, eu não implementei a lógica pois no teste não pedia e eu também não tinha certeza se a mock API me pertia usar o método POST para fazer a inserção de novos itens. Ela carrega, mas além do botão de voltar, só implementei a máscara de  CNPJ no input.

* O carregamento dessa tela é feito utilizando a técnica de lazy loading, onde o módulo da tela só é carregado quando se é necessário.

![image](https://user-images.githubusercontent.com/1158183/235504391-d9600202-2195-473d-9d34-4f5a1547f201.png)

## Tela de listagem de clientes

Nessa tela, todos os dados são carregados da API porém o botão de editar não está funcional.

O CNPJ recebido contém apenas números, porém eu usei um pipe para formatar do jeito certo.

![image](https://user-images.githubusercontent.com/1158183/235505100-50589e1b-cdcf-4115-9ff2-a25d52b9fb8f.png)

## Arquitetura da aplicação

Apesar de ser uma aplicação muito simples, eu apliquei alguns conceitos de reaproveitamento de componentes que estão localizados em uma pasta chamada "shared" junto com as pastas de models e services. Essa pasta shared contém um módulo próprio que pode ser ou não importato em outras partes da aplicação conforme a necessidade para evitar carregamento desnecessário quando possível.

Poderiam haver mais componentes shared, como botões e inputs, porém os que eu implementei nesse teste são:

### Título da página

Eu criei um componente de título da página totalmente customizável a nível de ícone, texto e botão, e ainda é possível customizar o ícone, o texto e o link do botão. Todos os dados são opcionais, como é possível ver na página de adição de clientes em que não há botão.

![image](https://user-images.githubusercontent.com/1158183/235506366-d1821838-0760-42ca-9792-679dabb29b74.png)

### Header e loading spinner

Outros componentes mais simples contidos nessa pasta shared são o cabeçalho da página e o loading spinner. Apesar deles terem sido usados nesse projeto de uma forma que não justifique essa modularização, é sabido que em aplicações maiores esse tipo de componente é usado em várias páginas e componentes.

## Client Service

Foi criado um serviço a fim de lidar com as requisições da API relacionado aos clientes.

Esse serviço contém apenas um método que é responsável pela requisição do array de clientes.

Foi criada uma variável de ambiente a fim de não expor o endpoint responsável pelos dados, e usando RxJs eu trato os erros de forma genérica. Eu uso esses erros para mostrar no front que algo falhou durante uma requisição.

![image](https://user-images.githubusercontent.com/1158183/235508317-6f9931ec-544d-411d-9f50-1fc1669e812d.png)

Eu também implementei um arquivo de teste unitário nesse serviço onde são realizados dois testes, um que testa a criação do serviço e outro se o endpoint está retornando um array.

![image](https://user-images.githubusercontent.com/1158183/235508794-8e655909-35e4-48b4-8db9-fd1e771ff689.png)

## Telas responsivas

Como não existiam layouts para as telas responsivas, eu tomei a liberdade para alterar algumas coisas que ao meu entender seriam melhor para a usabilidade.

![image](https://user-images.githubusercontent.com/1158183/235509250-1b1ed4b1-1275-4e12-b2f0-eeab2a6153b4.png)

![image](https://user-images.githubusercontent.com/1158183/235509302-a775f8f0-7e54-4fb9-9d28-958bbaa12169.png)





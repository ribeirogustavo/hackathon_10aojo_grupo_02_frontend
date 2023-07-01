# Movies catalog
Plataforma Web de streaming de vídeos empresariais de treinamento para seus funcionários

## Instalando o projeto na sua máquina
Para rodar a aplicação em seu ambiente você precisa ter o Node e o NPM instalados.

```
node -v
npm -v
```

Caso não tenha, instale a versão a partir do link abaixo:
* [Node](https://nodejs.org/en)


## Como rodar a aplicação
Ao clonar o projeto, instale as suas dependências a partir do seguinte comando:
```
npm i
```
Para enfim rodar a aplicação:
```
npm run start
```

## Adicionando novas funcionalidades
Temos duas branches principais: main e develop. 
Para adicionar código nesse repositório, basta criar uma nova branch a partir da **develop**. Ela pode ser criada pela interface do Github ou via terminal (na pasta raíz do seu projeto), com o seguinte comando:
```
git checkout -b nome-da-branch
```

## Subindo para os ambientes
Ao terminar as suas implementações, basta abrir uma pull request da **sua branch** para a **develop**. Ela estará pendente de aprovação de outra pessoa.
Após a aprovação, caso queira subir para produção, basta abrir uma pull request da **develop** para a **main**.



# Contribuinte conectado

Contribuinte conectado é uma aplicação voltada para os contribuintes do estado de alagoas com o objetivo de reduzir a burocaria na resolução de alguns problemas e facilitar a relação entrea SEFAZ-AL e o contribuinte.

## Insalação do projeto

Certifique-se de ter o ambiente para desenvolvimento nativo configurado.

Configuração de Java para Android e Xcode para Ios

Para buildar o contribuinte conectado é necessário instalar algumas depências

1: Instalar [nodeJS](https://nodejs.org/en/), versão requerida para funcionamento da aplicação v6.11.2.

para saber qual a versão instalada no seu dispositivo

```
$node -v

```
2: Instalar [watchman](https://facebook.github.io/watchman/docs/install.html#buildinstall)

3:  Instalar react-native-cli, atualmente na versão 2.0.1

```
$ npm install -g react-native-cli

```

4: Instalação de dependências

```
$ npm install

```

Esse comando irá instalar as dependências do projeto


5: Realizar o build

para realizar o build pelo ios

```
$ react-native run-ios

```

para realizar o build pelo android

```
$ react-native run-android

```

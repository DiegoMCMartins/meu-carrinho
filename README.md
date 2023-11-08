# Meu Carrinho

> Projeto mobile em Android e iOS com o objetivo de facilitar o gerenciamento das listas de supermercado

## Como Iniciar o projeto

1. Instale as dependências

Yarn
```bash
yarn
```

NPM
```bash
npm install
```

2. Rode o servidor do React Native
```bash
npx react-native start
```

3. Rode o projeto no aparelho

Android
```
npx react-native run-android
```

iOS
```
npx react-native run-ios
```

## Como adicionar uma fonte
- Android
  - Adicionei as variações da fonte na pasta `android/app/src/main/assets/fonts`, utilizar o formato `[FONTE]-[VARIACAO].ttf`. Exemplo com fonte Monteserrat `Montserrat-Regular.ttf`

- iOS: TODO

Após a adição nas respectivas plataformas, seguir os seguintes ajustes:
1. Adicionar o nome da fonte na interface `MeuCarrinhoFont` em `src/core/styles/fonts.ts`
```typescript
// Exemplo com fonte Montserrat

export type MeuCarrinhoFont = 'Raleway'; // Antes
export type MeuCarrinhoFont = 'Raleway' | 'Montserrat'; //Depois
```
2. Configurar as variações da fonte
```typescript
// Exemplo com a Montserrat
const montserratFont: MeuCarrinhoFontFamily = {
  Regular: 'Montserrat-Regular',
  Thin: 'Montserrat-Thin',
  Light: 'Montserrat-Light',
  Bold: 'Montserrat-Bold',
  Medium: 'Montserrat-Medium',
  SemiBold: 'Montserrat-SemiBold',
};
```

3. Adicionar a fonte à lista de fontes
```typescript
const fonts: Record<MeuCarrinhoFont, MeuCarrinhoFontFamily> = {
  Raleway: ralewayFont,
  Montserrat: montserratFont
};
```

4. Utilizar a nova fonte nos Componentes Text em `src/core/components/Text`
```javascript
<Text font="Montserrat" variant="SemiBold">Text</Text>
```

## To Do
- [] Utilizar o EdgeInsets no Android
- [] Ajustar a troca dinâmica da cor do StatusBar e NavigationBar no Android
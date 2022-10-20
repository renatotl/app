import theme from 'assets/styles/theme';


//Vamos criar um tipo Theme que receberá todas as configurações do theme que criamos anteriormente
type Theme = typeof theme;


declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}



// arquivos .ts   geram um arquivo .js
// arquivos .d.ts    definir typos que vamos utilizar 
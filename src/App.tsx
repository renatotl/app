import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

//todas as rotas vao sercontroladas por client query
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


/* Com essa estrutura em App.tsx, configuramos o nosso Router (que contém nossas rotas) para ser provido pelo QueryClientProvider, ou seja, todas as requisições que partirem das rotas serão gerenciadas pelo react-query, e quando chamadas, o react-query irá decidir, entre outras coisas, se precisa fazer uma nova requisição ao Backend ou se irá mostrar a requisição que está em cache, sendo possível que 2 requisições feitas em um curto período de tempo seja feita apenas 1 vez ao banco.
 */


import { LocalStorageKeys } from "types/LocalStorageKeys";// importando as chaves 



// o localStorage já possui metodos nativos do js como o getItem: que obtem as chaves slaves no LocalStorage, o setItem: posso gravar chaves e valores dentro no localStorage, removeItem: posso excluir uma chave no LocalStorage e por ultimo o clear: que posso apagar o LocalStorage por completo
export const LocalStorageHelper = {// o T é um tipo genérico
  // metodos com o "T" podem receber uma string ou number 
  // get obtem uma chave gravada no localstorage/ obtendo uma chave do tipo genérico/ a primeira propriedade é a chave a ser buscada do tipo LocalStorageKeys/ ela pode ser do tipo genérico ou nullo
  get: <T>(key: LocalStorageKeys): T | null => {
    // item recebe o medoto getItem pata pegar um valor e passamos a propriedade "key"
    const item = localStorage.getItem(key);
    // se o item for doferente de nullo então ele retorna o json.parse o valor dentro do item
    return item !== null ? JSON.parse(item) : item;
  },
    // metodos com o "T" podem receber uma string ou number 
// o key é a onde vai ser gravado eo LocalStorageKeys é o tipo, o segundo parametro value é o valor a ser armazenado do tipo genérico o T loco em seguida é o tipo de value, void porque não retirna nada 
  set: <T>(key: LocalStorageKeys, value: T): void => {
    // item recebe um valor trasnformado em json que é o parametro value
    const item = JSON.stringify(value);
    // acionamos o metodo do LocalStorage e vai armazenar a chave e o item
    localStorage.setItem(key, item);
  },
  remove: (key: LocalStorageKeys) => localStorage.removeItem(key),//recebe uma função e recebe um parametro que pergunta qual chave vai ser removida e executa a função localStorage.removeItem(key) com a propriedade a ser removida

  clear: () => localStorage.clear(),// uma aero function que executa localStorage.clear() apagando todo o LocalStorage
};

// passando os métodos do Local Storage:


import * as S from "./style";
import React, { ButtonHTMLAttributes } from "react";

// buttonLarge é do tipo button 
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

// foi nescessário criar value aqui e passar como props para buton ligon onde é o nome do botão
//E vamos criar um tipo ButtonLargeProps que recebe um objeto com o value e também ButtonType: para o value/ não esqucer de passar como props
type ButtonLargeProps = {
    value: string;
  } & ButtonType;// está passando duas propriedades o value e o buttontype 

const ButtonLarge = ({ value, ...props }: ButtonLargeProps) => {
    return <S.ButtonLarge {...props}>{value}</S.ButtonLarge>;
}

export default ButtonLarge;

/*
Por enquanto o nosso código está dando erro, então vamos definir as propriedades de ButtonLarge voltando no index.tsx, importando o React e o ButtonHTMLAttributes de forma desestruturada:
*/


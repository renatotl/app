import * as S from "./style";
import React, { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonToggleProps = {
  value: string;
  active?: boolean;
} & ButtonType;

const ButtonToggle = ({
  value,
  active = false,
  ...props
}: ButtonToggleProps) => {
  
  
  // Passando o props e activo com o valor ativo no boulean e em baixo renderizando o value 
  // passamos também lá no OrderDetails
  return (
    <S.ButtonToggle {...props} active={active}>
      {value}
    </S.ButtonToggle>
  );
};

export default ButtonToggle;

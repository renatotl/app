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
  return (
    <S.ButtonToggle {...props} active={active}>
      {value}
    </S.ButtonToggle>
  );
};

export default ButtonToggle;

import * as S from "./style";
import React, { HTMLAttributes } from "react";




//Este componente funciona como auxílio visual para manipular o elemento de checkbox do HTML.


type DivType = HTMLAttributes<HTMLDivElement>;


export type CheckboxIconProps = {
    icon?: React.ReactNode;
    active?: boolean;
    value: string;
} & DivType;

const CheckboxIcon = ({icon, value, active = false, ...props}: CheckboxIconProps) => {
    return (
        <S.CheckboxIcon active={active} {...props}>
            {active && <S.CheckboxIconCheck />}
            {icon && <div>{icon}</div>}
            <div>{value}</div>
        </S.CheckboxIcon>
    );
}

export default CheckboxIcon;

import { HTMLAttributes } from "react";
import * as S from "./style";

//Este componente serão itens de navegação das subseções da página Settings.

type NavColumnItemType = HTMLAttributes<HTMLDivElement>;

type NavColumnItemProps = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  active?: boolean;
} & NavColumnItemType;

const NavColumnItem = ({
  icon,
  title,
  subtitle,
  active = false,
  ...props
}: NavColumnItemProps) => {
  return (
    <S.NavColumnItem active={active} {...props}>
      <S.NavColumnItemIcon>{icon}</S.NavColumnItemIcon>
      <div>
        <S.NavColumnItemDetailsTitle>{title}</S.NavColumnItemDetailsTitle>
        <S.NavColumnItemDetailsSub>{subtitle}</S.NavColumnItemDetailsSub>
      </div>
    </S.NavColumnItem>
  );
};

export default NavColumnItem;
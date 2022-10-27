import React from "react";
import * as S from "./style";

export type OverlayProps = {
  children: React.ReactNode;
};

const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return <S.Overlay>{children}</S.Overlay>;
};

export default Overlay;


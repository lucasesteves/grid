import React, { forwardRef, Ref } from "react";
import * as S from "./styles";

export interface ContainerProps {
  children: React.ReactNode;
  spacing?: number;
  fluid?: boolean;
}

export const Container = forwardRef(
  (props: ContainerProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const { children, ...rest } = props;

    return <S.Container {...{ ref, ...rest }}>{children}</S.Container>;
  }
);

Container.displayName = "Container";
export default Container;

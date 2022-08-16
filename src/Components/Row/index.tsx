import React, { forwardRef, Ref } from "react";
import * as S from "./styles";

export interface RowProps {
  children: React.ReactNode;
  spacing?: number;
  alignItems?: "flex-start" | "flex-end" | "baseline" | "stretch";
}

export const Row = forwardRef(
  (props: RowProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const { children, ...rest } = props;

    return <S.Row {...{ ref, ...rest }}>{children}</S.Row>;
  }
);

Row.displayName = "Row";
export default Row;

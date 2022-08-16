import React from "react";
import { GridProps } from "../../styles";
import * as S from "./styles";

const Grid = ({ children, xs, sm, md, lg }: GridProps) => {
  return (
    <S.Grid xs={xs} sm={sm} md={md} lg={lg}>
      {children}
    </S.Grid>
  );
};

export default Grid;

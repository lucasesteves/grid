import React from 'react';
import * as S from './styles'


const Grid = ({children, xs, sm, md, lg}:S.GridProps) => {
    return(
        <S.Grid xs={xs} sm={sm} md={md} lg={lg}>{children}</S.Grid>
    )
}

export default Grid;

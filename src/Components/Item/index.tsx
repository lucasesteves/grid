import React from 'react';
import * as S from './styles'

interface ItemsProps {
    children: React.ReactNode
}

const Item = ({children}:ItemsProps) => {
    return(
        <S.Item>{children}</S.Item>
    )
}

export default Item;

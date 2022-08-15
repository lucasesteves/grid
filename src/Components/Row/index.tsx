import * as S from './styles';

interface RowProps {
    children: React.ReactNode
}

const Row = ({children}:RowProps) => {
    return(
        <S.Row>{children}</S.Row>
    )
}

export default Row;
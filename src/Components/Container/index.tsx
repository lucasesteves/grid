import React, { useEffect, useRef } from 'react';
import * as S from './styles'

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({children}:ContainerProps) => {
    const container = useRef(null) as any;
    // const [total, setTotal]  = useState({xs:0, sm:0, md:0, lg:0})
    // const [bodyChildren, setBodyChildren] = useState<any>(children);
    
    useEffect(()=>{
        // if(container && bodyChildren){
        //     console.log(container.current.childElementCount)
        //     console.log("teste", bodyChildren)
        //     let xs = 0, sm = 0, md = 0,lg = 0
        //     bodyChildren.forEach((item:any)=>{
        //             xs = xs + item.props.xs
        //             sm = sm + item.props.sm 
        //             md = md + item.props.md
        //             lg = lg + item.props.lg
        //     });
        //     setTotal({xs,sm,md,lg})
        // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // useEffect(()=>{
    //     if(total.xs >12 && total.sm > 12 && total.md > 12 && total.lg > 12){
    //         let bodyLimited = null;
    //         setBodyChildren(bodyChildren.removeChild(container.current.lastElementChild));
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[total])

    return(
        <S.Container ref={container}>{children}</S.Container>
    )
}

export default Container;

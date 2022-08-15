import React from 'react';
import styled from 'styled-components'

export interface GridProps {
    children: React.ReactNode
    xs?:number;
    sm?:number;
    md?:number;
    lg?:number;
}

export const breakpoints = {
    xs: 720,
    sm: 960,
    md: 1240,
    lg: 1800
}

const fr = breakpoints.lg/12;


export const Grid = styled.div<GridProps>`
    display: flex;
    /* background: yellow; */
    flex-basis: ${({xs}) => `${!!xs && (xs*fr)}px`};
    margin-inline: 0 25px;

    &:last-child {
        margin-right: 0;
    }

    @media (min-width: ${`${breakpoints.xs+1}px`}) and (max-width: ${`${breakpoints.sm}px`}) {
        /* background: purple; */
        flex-basis: ${({sm}) => `${!!sm && (sm*fr)}%`};
    }

    @media (min-width: ${`${breakpoints.sm+1}px`}) and (max-width: ${`${breakpoints.md}px`}) {
        /* background: brown; */
        flex-basis: ${({md}) => `${!!md && (md*fr)}%`};
    }

    @media (min-width: ${`${breakpoints.md+1}px`}) {
        /* background: black; */
        flex-basis: ${({lg}) => `${!!lg && (lg*fr)}%`};
    }
    
`

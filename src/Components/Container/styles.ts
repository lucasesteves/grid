import styled from "styled-components"
import { breakpoints } from "../Col/styles"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    background: #ccc;
    width: ${breakpoints.lg}px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.lg}px) {
        width: 100%;
    }
`
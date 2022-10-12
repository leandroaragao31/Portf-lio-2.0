import styled from "styled-components";


export const Container = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
line-height:6vh;
align-items:center;
height:70vh;
@media(max-width:400px){
        font-size:0.8rem;
    }

`


export const BoxImg = styled.figure`
    width:15%;
    @media(max-width:400px){
        width:40%;
    }
`

export const Photo = styled.img`
    width:100%;
    border-radius:50%;

`
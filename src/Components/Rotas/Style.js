import styled from 'styled-components';
import { Link } from 'react-router-dom';





export const Container = styled.header`
background-color:${props => (props.mode === true ? '#03111E' : '#A7BEC0')};
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    @media(max-width:800px){
    flex-direction:row-reverse;
    font-size:1rem;
    }
button{
    font-size:2rem;
    width:9vw;
    background-color:transparent;
    cursor:pointer;
    color:${props => (props.mode === true ? '#919191' : '#574940')};;
    margin-left:2vw;
    height: 10vh;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width:800px){
        height:5vh;
    }
}



ul{
    height:20vh;
    padding: 2vw 0 0 2vw;
}
li{
    height:25%;
    @media(max-width:800px){
        height:4vh;
    }
}
.box_logo--services{
    width:57%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2vw;
    @media(max-width:800px){
        width:10%;
        justify-content:flex-start;
    }
    @media(max-width:400px){
        width:15%;
    }
}

`;

export const Title = styled.h1`
    display:none;
    @media(max-width:800px){
        display:flex;
        align-items:flex-end;
        padding:0 2vw 0 0;
        height:20vh;
    }
    @media(max-width:400px){
        padding:0 0 0 7vw;
        height:24vh;
    }

`

export const Logo = styled.img`
    width:15%;
    @media(max-width:800px){
        display:none;
    }
`

export const Mode = styled.img`
    width:10%;
    cursor:pointer;
    transition:2s ease-in-out;
    &:hover{
        filter: drop-shadow(7px 4px 2px rgba(252, 163, 17, 0.4));
    }
    @media(max-width:800px){
        width:100%;
    }

`

export const MenuLink = styled(Link)`
    text-decoration:none;
    color:${props => (props.mode === true ? '#919191' : '#574940')};;
`

/* 
1D3843 azul
6D978E verde
CCD4BD gelo
F4F2DC nuvem
574940 marrom */
import styled from 'styled-components';
import { Link } from 'react-router-dom';





export const Container = styled.header`
background-color:${props => (props.mode === true ? '#03111E' : '#faebd7')};
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    max-width:1920px;
    width:100%;
    margin:auto;
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
    margin-left:4vw;
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
    width:56%;
    height:22vh;
    border:none;;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:1vh;
    @media(max-width:800px){
        width:55%;
        height:20vh;
        flex-direction:row-reverse;
        justify-content:space-between;
        align-items:flex-start;
        margin:0;
    }
    @media(max-width:400px){
        width:15%; 
    }
  
}
`
export const Logo = styled.img`

@media(max-width:800px){
        height:10vh;
    
    }
   @media(max-width:400px){
        display:none;
    }

`


/* export const Title = styled.h1`
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

` */



export const Mode = styled.img`
    width:10%;
    cursor:pointer;
    transition:2s ease-in-out;
    margin-right:1vw;
    &:hover{
        filter: drop-shadow(7px 4px 2px rgba(252, 163, 17, 0.4));
    }
    @media(max-width:800px){
        width:10%;
    }
    @media(max-width:400px){
        width:100%;
    }

`

export const MenuLink = styled(Link)`
    text-decoration:none;
    color:${props => (props.mode === true ? '#919191' : '#574940')};
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight:700;
`

/* 
1D3843 azul
6D978E verde
CCD4BD gelo
F4F2DC nuvem
574940 marrom */
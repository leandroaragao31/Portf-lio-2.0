import styled from 'styled-components';
import { Link } from 'react-router-dom';





export const Container = styled.header`
background-color:${props => (props.mode === true ? '#03111E' : '#faebd7')};
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1920px;
    width:100%;
    margin:auto;
    @media(max-width:800px){
    font-size:1rem;
    }
button{
    font-size:2rem;
    width:9vw;
    background-color:transparent;
    cursor:pointer;
    color:${props => (props.mode === true ? '#919191' : '#574940')};;
    height: 10vh;
    border:none;
    display:none;
    align-items:center;
    justify-content:center;

   
    
    @media(max-width:800px){
        height:5vh;
        display:flex;
    }
}


.box_logo--services{
    width:15%;
   height:15vh;
    border:none;;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:1vh;
    @media(max-width:800px){
        width:40%;
        height:10vh;
        justify-content:flex-end;
        margin:0;
    }
    @media(max-width:500px){
        width:15%; 
    }
  
}

`

export const boxMenu = styled.div`
width:30%;
border:none;
height:15vh;
display:flex;
align-items:center;
@media(max-width:800px) {
    flex-direction:column;
    height:13.9vh;
    align-items:flex-start;
    
}


`
export const NavMenu = styled.nav`
    width:100%;
    margin-left:1vw;
    display:flex;
    @media(max-width:800px){
        width:50%;
        display:none;
        
    }
    ul{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
  
}


li{
    width:30%;
    text-align:center;
    @media(max-width:800px){
        width:30%;
    }
}

`

export const MobileMenu = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    @media(max-width:800px){
        flex-direction:column;
        align-items:flex-start;
        width:40%;
        
    }
    li{
    width:20%;
    text-align:center;
    @media(max-width:800px){
        width:30%;
    }
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
    width:20%;
    cursor:pointer;
    transition:2s ease-in-out;
    
    &:hover{
        filter: drop-shadow(7px 4px 2px rgba(252, 163, 17, 0.4));
    }
    @media(max-width:800px){
        width:25%;
       
    }
    @media(max-width:500px){
        width:100%;
        margin-bottom:6vw;
    }

`

export const MenuLink = styled(Link)`
    text-decoration:none;
    font-size:1.5rem;
    color:${props => (props.mode === true ? '#919191' : '#574940')};
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight:700;
    animation: fade-in 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    @keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
    &:hover{
       animation: borda 1.5s normal ease-in-out both;
       @keyframes borda {
      from {
            border-bottom:none;
        }   
      
       }
    }
    @media(max-width:800px){
        font-size:18px;
    }
    @media(max-width:450px){
        font-size:13px;
    }
`

/* 
1D3843 azul
6D978E verde
CCD4BD gelo
F4F2DC nuvem
574940 marrom */
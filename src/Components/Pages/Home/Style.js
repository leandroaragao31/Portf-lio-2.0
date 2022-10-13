import styled from "styled-components";


export const Container = styled.section`
display:flex;
flex-direction:column;
justify-content:center;
line-height:8vh;
align-items:center;
height:70vh;
font-family: 'IBM Plex Sans', sans-serif;
font-size:20px;
max-width:1920px;
width:100%;
margin:auto;
@media(max-width:800px){
    height:60vh;
    font-size:16px;
}


h2, h1, p{
    animation: focus-in 1.5s ease-in-out both;
    @keyframes focus-in {
  0% {
    letter-spacing: 1em;
            transform: translateZ(300px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
            transform: translateZ(12px);
            filter: blur(0);
    opacity: 1;
  }
}


}
@media(max-width:400px){
        font-size:0.8rem;
    }

`

export const BoxImg = styled.figure`
    width:10%;
    @media(max-width:400px){
        width:40%;
    }
`
export const BoxContact = styled.figure`
    width:96%;
    display:flex;
    align-items:center;
 figcaption{
    font-size:13px;
 }
    @media(max-width:800px){
       height:20vh;
    }
    

`
export const Logo = styled.img`
    width:7%;
    cursor:pointer;
    @media(max-width:800px){
       width:15%;
    }
    
`
export const Photo = styled.img`
    width:100%;
    border-radius:50%;
    animation: flip-vertical-fwd 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) forwards;
    @keyframes flip-vertical-fwd {
         0% {
            transform: translateZ(0) rotateY(0);
         }
        100% {
            transform: translateZ(160px) rotateY(180deg);
        }
}
`

export const ContainerContact = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:20%;
animation: scale-up-hor-left 0.7s cubic-bezier(0.550, 0.055, 0.675, 0.190) both;
@keyframes scale-up-hor-left {
  0% {
            transform: scaleX(0.4);
            transform-origin: 0% 0%;
  }
  100% {
            transform: scaleX(1);
            transform-origin: 0% 0%;
  }


}
@media(max-width:800px){
       width:40%;
       margin-top:3vh;
    }

.Logo-Linkedin{
    width:3vw;
    animation: scale-in-hor-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes scale-in-hor-center {
  0% {
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
            transform: scaleX(1);
    opacity: 1;
  }
}
    @media(max-width:800px){
       width:9vw;
       
    }
}

.Logo-GitHub{
    width:3.5vw;
    animation: scale-in-hor-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes scale-in-hor-center {
  0% {
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
            transform: scaleX(1);
    opacity: 1;
  }
}
    @media(max-width:800px){
       width:10vw;
    }
}

.Logo-Instagram{
    width:5vw;
    animation: scale-in-hor-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    @keyframes scale-in-hor-center {
  0% {
            transform: scaleX(0);
    opacity: 1;
  }
  100% {
            transform: scaleX(1);
    opacity: 1;
  }
}
    @media(max-width:800px){
       width:14vw;
    }
}
`

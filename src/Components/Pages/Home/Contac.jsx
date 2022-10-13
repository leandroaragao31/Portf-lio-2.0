import React from 'react';
import * as S from './Style'



const Contac = ({linkedin, github, instagram}) => {
    return (
        <S.ContainerContact>
            <a href='https://www.linkedin.com/in/leandro-arag%C3%A3o-522841207/' target='_blank' rel="noreferrer">
               <img className='Logo-Linkedin' src={linkedin} alt='' />
            </a>
            <a href='https://github.com/leandroaragao31' target='_blank' rel="noreferrer">
            <img className='Logo-GitHub'  src={github} alt='' />
            </a>
            <a href='https://www.instagram.com/leandroaragao3107/' target='_blank' rel="noreferrer">
            <img className='Logo-Instagram'  src={instagram} alt='' />
            </a>
        </S.ContainerContact>
    );
}

export default Contac;


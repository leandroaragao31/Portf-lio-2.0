import React from 'react';
import * as S from './Style'
import Leo from '../../../Assets/Leandro2.jpg'

const About = () => {
    return (
        <S.Container>
            <h1>Aqui vai sobre minha pessoa</h1>
            <S.Box>
                <S.Photo src={Leo} alt='Eu'/>
            </S.Box>
            <S.Paragraph>Me Chamo Leandro tenho 32 anos,
                Formando de Filosofia e apaixonado por tecnologia,
                atualmente como professor de front-end trabalhando com as tecnologias
                html, css, javascript, react e jamstack.</S.Paragraph>
        </S.Container>
    );
}

export default About;

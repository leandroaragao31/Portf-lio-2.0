import React, {useState, useCallback} from 'react';
import * as S from './Style'
import Leo from '../../../Assets/Leandro.jpeg'
import Photo from '../../../Assets/pngegg.png'
import Contac from './Contac';
import Linkedin from '../../../Assets/Linkedin.png'
import GitHub from '../../../Assets/Github.png'
import Instagram from '../../../Assets/instagram.png'


const Home = () => {
    const [open, setOpen] = useState(false)
    const ContactCallBack = useCallback(() => setOpen(!open), [open])

    return (
        <S.Container>
            <h1>Hi, There</h1>
            <p>I'm Leandro Aragão</p>
            <h2>Teacher and  Front-End Developer</h2>
            <S.BoxImg>
                <S.Photo src={Leo} alt='Eu' />
            </S.BoxImg>
            <S.BoxContact>
                <S.Logo src={Photo} alt='Logo' onClick={ContactCallBack} title='Contatos'/>
                <figcaption>Click for Contact</figcaption>
                {open && <Contac linkedin={Linkedin} github={GitHub} instagram={Instagram} />}
            </S.BoxContact>
        </S.Container>
    )
}

export default Home;





/* const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}
return (
    <div>

        <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
        </motion.ul>

            <motion.div
    
                style={{ border: 'solid', width: '20vw', height: '10vh', }}


                animate={{ rotate: [0, 90, 180, 360] }}
                transition={{ ease: 'easeInOut', duration: 5 }}
            >
                Rodando
            </motion.div>
            <motion.button
            
                initial={{ opacity: 0.6 }}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
            >Botão</motion.button>

    </div> */
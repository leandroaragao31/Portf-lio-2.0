import React, { useState, useCallback } from 'react';
import { motion } from "framer-motion"
import * as S from './Style'
import Sol from '../../Assets/sol.png'
import Lua from '../../Assets/Moon.png'
import LA from '../../Assets/LA.png'
import GlobalStyle from '../GlobalStyle/Global';



const Props = ({ route, routeB, routeC, Logo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const menuCall = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const modalCall = useCallback(() => setOpen(!open) , [open])
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };
 

    return (
        <S.Container mode={open}>
            <GlobalStyle mode={open} />
            <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
                <motion.button whileTap={{ scale: 0.97 }} onClick={menuCall}>
                    <motion.div className='menu'
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 },
                            transition: {
                                duration: 1
                            }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}>{isOpen === true ? 'X' : '☰	'}
                    </motion.div>
                </motion.button>
                <motion.ul style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                        }}}>
                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }}>
                        <S.MenuLink mode={open} to='/'>{route}</S.MenuLink>
                    </motion.li>
                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }}>
                        <S.MenuLink mode={open} to='/about'>{routeB}</S.MenuLink>
                    </motion.li>
                    <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9 }}>
                        <S.MenuLink mode={open} to='/works'>{routeC}</S.MenuLink>
                    </motion.li>
                </motion.ul>
            </motion.nav>
           
            <div className='box_logo--services'>
                <S.Logo src={LA} alt='LA' />
                <S.Mode onClick={modalCall} title={open === true ? 'LightMode' : 'DarkMode'} src={open === true ? Sol : Lua} alt='light/dark-mode' />
            </div>
        </S.Container>
    );
}

export default Props;




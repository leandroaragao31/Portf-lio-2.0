import React, { useState, useCallback } from 'react';
import * as S from './Style'
import Sol from '../../Assets/sol.png'
import Lua from '../../Assets/Moon.png'
import GlobalStyle from '../GlobalStyle/Global';



const Props = ({ route, routeB, routeC, Logo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const menuCall = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const modalCall = useCallback(() => setOpen(!open), [open])

    const Menu = () => {
        return (

            <S.MobileMenu>
                <li>
                    <S.MenuLink mode={open} to='/'>{route}</S.MenuLink>
                </li>
                <li>
                    <S.MenuLink mode={open} to='/about'>{routeB}</S.MenuLink>
                </li>
                <li>
                    <S.MenuLink mode={open} to='/works'>{routeC}</S.MenuLink>
                </li>
            </S.MobileMenu>

        )
    }

    return (
        <S.Container mode={open}>
            <GlobalStyle mode={open} />
            <S.boxMenu>
                <button onClick={menuCall}>{isOpen === true ? 'X' : '☰'}</button>
                <S.NavMenu>
                    <ul>
                        <li>
                            <S.MenuLink mode={open} to='/'>{route}</S.MenuLink>
                        </li>
                        <li>
                            <S.MenuLink mode={open} to='/about'>{routeB}</S.MenuLink>
                        </li>
                        <li>
                            <S.MenuLink mode={open} to='/works'>{routeC}</S.MenuLink>
                        </li>
                    </ul>
                </S.NavMenu>
                {isOpen && <Menu />}
            </S.boxMenu>
            <div className='box_logo--services'>

                <S.Mode onClick={modalCall} title={open === true ? 'LightMode' : 'DarkMode'} src={open === true ? Sol : Lua} alt='light/dark-mode' />
            </div>
        </S.Container>
    );
}

export default Props;




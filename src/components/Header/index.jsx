import React, {useContext, useState, useEffect} from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import sunImg from '../../assets/sun.png';
import moonImg from '../../assets/moon.png';
import brazilImg from '../../assets/brazil.png';
import usaImg from '../../assets/usa.png';

import { Container, Content, Logo, Main, IconContainer, Link } from './styles';
import LanguageContext from '../../context/Language';

const Header = ({ handleThemeToggle }) => {
    const { title } = useContext(ThemeContext);
    const { language, hadleLanguageToggle } = useContext(LanguageContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
    });

    function handleMenuToggle() {
        setIsMenuOpen((v) => !v);
    }

    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth,
            })
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (dimensions.width > 768 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [dimensions.width, isMenuOpen]);

    return (
        <Container>
            <Content>
                <Logo><a href="#">Vinicius PR</a></Logo>

                <Main isMenuOpen={ isMenuOpen }>
                    <ul>
                        <li>
                            <Link href='#about' onClick={handleMenuToggle}>
                                {language === 'portuguese' ? 'Sobre mim' : 'About me'}
                            </Link>
                        </li>
                        <li>
                            <Link href='#projects' onClick={handleMenuToggle}>
                                {language === 'portuguese' ? 'Projetos' : 'Projects'}
                            </Link>
                        </li>
                        <li>
                            <Link href='#skills' onClick={handleMenuToggle}>
                                {language === 'portuguese' ? 'Habilidades' : 'Skills'}
                            </Link>
                        </li>
                        <li>
                            <Link href='#contacts' onClick={handleMenuToggle}>
                                {language === 'portuguese' ? 'Contato' : 'contacts'}
                            </Link>
                        </li>
                    </ul>
                    <div className="switch_container">
                        <Switch
                            onChange={handleThemeToggle}
                            checked={title === 'light'}
                            checkedIcon={<img src={sunImg} alt="ligh mode" width={20} height={20}/>}
                            uncheckedIcon={<img src={moonImg} alt="dark mode" width={20} height={20}/>}
                            height={20}
                            width={45}
                        />
                        <Switch
                            onChange={hadleLanguageToggle}
                            checked={language === 'portuguese'}
                            checkedIcon={<img src={brazilImg} alt="portuguese" width={20} height={20}/>}
                            uncheckedIcon={
                                <div style={{transform: 'translateX(6px)'}}>
                                    <img src={usaImg} alt="english" padding={20} width={20} height={20}/>
                                </div>
                            }
                            height={20}
                            width={45}
                        />
                    </div>
                </Main>

                <IconContainer>
                    {!isMenuOpen ?
                        <BiMenu onClick={handleMenuToggle}/>
                        : <AiOutlineClose onClick={handleMenuToggle}/>
                    }
                </IconContainer>

            </Content>
        </Container>
    )
}

export default Header;
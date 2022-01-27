import React, {useContext} from 'react';
import LanguageContext from '../../context/Language';

import { Container, Link } from './styles';
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

const Contacts = () => {
    const { language } = useContext(LanguageContext);
    return (
        <Container>
            <span id='contacts'></span>
            <h1>{language === 'portuguese' ? 'Contatos' : 'Contacts'}</h1>
            <div>
                <Link href="https://www.linkedin.com/in/vinicius-p-resende-330266165/" target="_blank">
                    <BsLinkedin size={48} color="#0072b1"/>
                </Link>

                <Link href="https://github.com/Vinicius-PR" target="_blank">
                    <BsGithub size={48} color="#171515"/>
                </Link>

                <Link href="mailto:vinicius_auto@outlook.com?Subject=Hi, I saw your profile and would like to talk to you">
                    <AiFillMail size={48} color="blue"/>
                </Link>

                <Link href="https://api.whatsapp.com/send?phone=5532999930257&text=Hi, I saw your profile" target='_blank'>
                    <FaWhatsappSquare size={48} color='#4FCE5D'/>
                </Link>

                <Link href="https://t.me/viniciuspr" target='_blank'>
                    <BsTelegram size={48} color='#0088CC'/>
                </Link>

            </div>
        </Container>
    );
};

export default Contacts;

import React, {useContext, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import LanguageContext from '../../context/Language';

import { Container, Content, Link, Form, Spinner } from './styles';
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const text = {
    portuguese: {
        title: "Contato",
        paragraph: "Caso queira saber mais, é só entrar em contato",
        form_name: "Nome",
        form_message: "Mensagem",
        form_button: "Enviar",
        send_email_message_success: "Mensagem enviada",
        send_email_message_error: "Mensagem não enviada. Error"
    },
    english: {
        title: "Contact",
        paragraph: "If you want to know more, just send me a message",
        form_name: "Name",
        form_message: "Message",
        form_button: "Send",
        send_email_message_success: "Message has been sent",
        send_email_message_error: "Error. Message not sent"
    }
}

const Contacts = () => {
    const { language } = useContext(LanguageContext);
    const form = useRef();
    const [isSendingEmail, SetIsSendingEmail] = useState(false);
    const [isSendSuccess, setIsSendSuccess] = useState('');

    const inputName = useRef();
    const inputEmail = useRef();
    const inputMessage = useRef();
     
    const sendEmail = (e) => {
        e.preventDefault();

        SetIsSendingEmail(true);
        setIsSendSuccess('');
        emailjs.sendForm('service_m6p56sa', 'template_v2ry0cn', form.current, '33nMEAKsqQKup-Qq9')
            .then((result) => {
                console.log(result.text);
                SetIsSendingEmail(false);
                setIsSendSuccess('sent');
                inputName.current.value = "";
                inputEmail.current.value = "";
                inputMessage.current.value = "";
            }, (error) => {
                console.log(error.text);
                setIsSendSuccess('error');
            });


    };

    return (
        <Container>
            <span id='contacts'></span>
            <h1>{text[language].title}</h1>
            <h3>{text[language].paragraph}</h3>

            <Form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>{text[language].form_name}</label>
                    <input ref={inputName} required type="text" name="name" />
                </div>

                <div>
                    <label>Email</label>
                    <input ref={inputEmail} required type="email" name="email" />
                </div>

                <div>
                    <label>{text[language].form_message}</label>
                    <textarea ref={inputMessage} required name="message" />
                </div>

                <input disabled={isSendingEmail} type="submit" value={text[language].form_button} />

                {
                    isSendingEmail ? (
                        <Spinner/>
                    ) : isSendSuccess === "" && (
                        <p style={{height: '2rem'}}></p>
                    )
                }

                {
                    isSendSuccess === "sent" && (
                        <p style={{color: 'green', height: '2rem', lineHeight: '2rem'}}>
                            {text[language].send_email_message_success}
                        </p>
                    )
                }    

                {
                    isSendSuccess === "error" && (
                        <p style={{color: 'red', height: '2rem', lineHeight: '2rem'}}>
                            {text[language].send_email_message_error}
                        </p>
                    )
                }  

                
            </Form>

            <h2>Social Links</h2>
            <Content>
                <div>
                    <Link href="https://www.linkedin.com/in/vinicius-p-resende-330266165/" target="_blank">
                        <h4>Linkedin</h4>
                        <BsLinkedin size={28} color="#0072b1"/>
                    </Link>
                </div>

                <div>
                    <Link href="https://github.com/Vinicius-PR" target="_blank">
                        <h4>GitHub</h4>
                        <BsGithub size={28} color="#171515"/>
                    </Link>
                </div>

                <div>
                    <Link href="mailto:vinicius_auto@outlook.com?Subject=Hi, I saw your profile and would like to talk to you">
                        <h4>Email</h4>
                        <AiFillMail size={28} color="blue"/>
                    </Link>
                </div>

                <div>
                    <Link href="https://t.me/viniciuspr" target='_blank'>
                        <h4>Telegram</h4>
                        <BsTelegram size={28} color='#0088CC'/>
                    </Link>
                </div>
            </Content>

        </Container>
    );
};

export default Contacts;

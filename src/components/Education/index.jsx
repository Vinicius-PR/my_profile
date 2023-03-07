import React, { useContext } from "react";
import { Container } from "./style";
import LanguageContext from "../../context/Language";

const text = {
  portuguese: {
    title: "Educação",
    subtitle: "Cursos que fiz",
    courses: [
      "RocketSeat trilha Ignite, React/NextJS- Curso profissionalizante, Front-end Web Development",
      "IFET SJDR - Instituto Federal do Sudeste de Minas Gerais. Curso Técnico em Informatica para internet",
      "Senai SJDR - Curso Técnico em automação Industrial",
      "Curso superior de física bacharelado incompleto",
    ],
    udemy_courses_title: "Cursos feito na Udemy:",
    udemy_courses: [
      "The Modern Flexbox Grid sass Animation Developer Course, com Muslim Helalee",
      "Beginning C++ programing - From Beginner to Beyond, com Frank J. Mitropoulos",
      "Python Bootcamp: Go from zero to hero in Pyton 3, com Jose Portilla",
      "PLC Programming From Scratch (PLC I), com Paul Lynn",
      "Practical PLC programming (PLC II), com Paul Lynn",
      "Process Visualization with HMI / SCADA (PLC III), com Paul Lynn",
      "Advanced Programming Paradigms (PLC IV), com Paul Lynn",
    ],
  },
  english: {
    title: "Education",
    subtitle: "Courses that I did",
    courses: [
      "RocketSeat Ignite path, React/NextJS- vocational course, Front-end Web Development",
      "IFET SJDR - Federal Institute of the Southeast of Minas Gerais. Computer Technician Course for the Internet",
      "Senai SJDR - Technical Course in Industrial Automation",
      "Incomplete Bachelor's Degree in Physics",
    ],
    udemy_courses_title: "Courses done at Udemy:",
    udemy_courses: [
      "The Modern Flexbox Grid sass Animation Developer Course, with Muslim Helalee",
      "Beginning C++ programing - From Beginner to Beyond, with Frank J. Mitropoulos",
      "Python Bootcamp: Go from zero to hero in Pyton 3, with Jose Portilla",
      "PLC Programming From Scratch (PLC I), with Paul Lynn",
      "Practical PLC programming (PLC II), with Paul Lynn",
      "Process Visualization with HMI / SCADA (PLC III), with Paul Lynn",
      "Advanced Programming Paradigms (PLC IV), with Paul Lynn",
    ],
  },
};

const Education = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Container>
      <span id="education"></span>
      <h1>{text[language].title}</h1>

      <h2>{text[language].subtitle}</h2>
      <ul>
        {text[language].courses.map((course) => (
          <li key={course}> {course} </li>
        ))}
      </ul>

      <strong> {text[language].udemy_courses_title} </strong>

      <ul>
        {text[language].udemy_courses.map((course) => (
          <li key={course}> {course} </li>
        ))}
      </ul>
    </Container>
  );
};

export default Education;

import React, { useState, useEffect, useContext } from 'react';
import fetcher from '../../services/api';
import { Container, Content } from './styles';
import RepoItem from '../RepoItem';
import LanguageContext from '../../context/Language';

const Projects = () => {
    const [projetcs, setProjects] = useState([]);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        fetcher("https://api.github.com/users/vinicius-pr/repos", 'GET')
            .then(data => {
                setProjects(data)
            });
    }, []);

    return (
        <Container>
            <span id='projects'></span>
            <h1>{language === 'portuguese' ? 'Meus Projetos' : 'My Projects'}</h1>
            <Content>
                {projetcs.map((repo) => (
                    <RepoItem key={repo.id} repository={repo}/>
                ))}
            </Content>
        </Container>
    );
};

export default Projects;

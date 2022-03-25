import React, { useState, useEffect, useContext } from 'react';
import fetcher from '../../services/api';
import { Container, Content } from './styles';
import RepoItem from '../RepoItem';
import LanguageContext from '../../context/Language';
import Pagination from '../Pagination';

const Projects = () => {
    const [projetcs, setProjects] = useState([]);
    const { language } = useContext(LanguageContext);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetcher("https://api.github.com/users/vinicius-pr/repos", 'GET')
            .then(data => {
                setProjects(data)
            });
    }, []);

    const numberOfPages = Math.ceil(projetcs.length/10);
    let start_index = (page * 10) - 10
    let stop_index = page * 10

    return (
        <Container>
            <span id='projects'></span>
            <h1>{language === 'portuguese' ? 'Meus Projetos' : 'My Projects'}</h1>
            <Pagination page={page} numberOfPages={numberOfPages} haddleChangePage={setPage}/>
            <Content>
                {projetcs.slice(start_index,stop_index).map((repo) => (
                    <RepoItem key={repo.id} repository={repo}/>
                ))}
            </Content>
            <Pagination page={page} numberOfPages={numberOfPages} haddleChangePage={setPage}/>
        </Container>
    );
};

export default Projects;

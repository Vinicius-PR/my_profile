import React, {useState, useEffect } from 'react';
import { Container, IconContainer } from './styles';
import axios from 'axios';
import { GoRepoClone } from "react-icons/go";


const RepoItem = ({ repository }) => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        axios.get(repository.languages_url)
            .then(res => res.data)
            .then(data => {
                setLanguages(Object.keys(data))
            })
    }, [repository.languages_url]);

    return (
        <Container href={repository.html_url} target="_blank">
            <h3>
                <IconContainer>
                    <GoRepoClone size='1rem'/>                
                </IconContainer>
                
                {repository.name}
            
            </h3>
            <p>{repository.description}</p>

            <div className='languages'>
                {
                    languages.map((lang) => (
                        <span className='languages_item'>{ lang }</span>
                    ))
                }
            </div>

        </Container>
    );
};

export default RepoItem;

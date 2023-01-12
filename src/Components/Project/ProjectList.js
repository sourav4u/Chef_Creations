import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';


const Img = styled.img`

    height: 300px;
    width: 300px;
    border-radius: 10px;

`;



function ProjectList(props) {
    const navigate = useNavigate();

    function handler(){
        
        navigate(`/project/${props.id}`);

    }

    return (
        <>
            <div className='box' onClick={handler}>
                <h2>{props.title}</h2>
                <Img src={props.url} />
                <p>{props.content.slice(0, 25)}... <i className='linking'>Read More</i></p>
                <h4>{props.date}</h4>
            </div>
        </>
    )
}

export default ProjectList
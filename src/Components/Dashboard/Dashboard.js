import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import ProjectList from '../Project/ProjectList';



const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25%;
    gap: 2rem;
    margin-top: 20px;
    justify-content: center;
    padding-bottom: 5rem;
    
   @media (max-width: 1250px) { //Max means 0 to max
     
      grid-template-columns: 35% 35%;

    } 
    @media (max-width: 900px) {
     
      grid-template-columns: 50%;
    }
    @media (max-width: 700px) {
      
      grid-template-columns: 90%;
    }
`;



function Dashboard() {
  const data = useSelector(state => state);



  return (

    <StyledDiv>

      {data.map((item, i) => {

        return <ProjectList key={i} title={item.title} date={item.date} content={item.content} url={item.URIS} id={item.id} />

      })}

    </StyledDiv>
  )
}

export default Dashboard;

import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.span`
    border: 2px solid black;
    background-color: black;
    margin-left: 1rem;
    padding: .3rem .5rem;
    border-radius: 5px;
`;

function SignedOut() {
  return (
    <div>
        <div>
            <Button> <NavLink to="/signup" className='links'> Sign Up</NavLink></Button>
            <Button> <NavLink to="/login" className='links'> Log In</NavLink></Button>  
        </div>
    </div>
  )
}

export default SignedOut
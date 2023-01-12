import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/fbConfig';
import { useNavigate } from 'react-router-dom';

const Button = styled.span`
    border: 2px solid black;
    background-color: black;
    margin-left: 1rem;
    padding: .3rem .5rem;
    border-radius: 5px;
    text-decoration: none;
`;

const LogoutButton = styled.button`
    border: 2px solid black;
    background-color: black;
    padding: .3rem .5rem;
    border-radius: 5px;
    text-decoration: none;

`

function SignedIn() {

    const navigate = useNavigate();

    function handler(){

        signOut( auth ).then( (value) => {
            console.log(value)
            navigate("/");
        } ).catch( (err) => {
            console.log(err)
        } )

    }

    return (
        <div>
            <Button> <NavLink to="/new" className="links">New post</NavLink> </Button>
            <Button> <LogoutButton className="links" onClick={handler}>Log out</LogoutButton> </Button>
        </div>
    )
}

export default SignedIn
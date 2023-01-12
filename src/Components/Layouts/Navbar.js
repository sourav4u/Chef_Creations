import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import   styled  from 'styled-components'
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/fbConfig';

const Background = styled.div`

    background-color: grey;
    display: flex;
    color: whitesmoke;
    padding: 1rem 8rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {

      background-color: grey;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0;

    }

`;

function Navbar() {

    const [status , setStatus] = useState()

    onAuthStateChanged( auth , (currentUser) => {
      //  console.log(currentUser);
        setStatus(currentUser);
    });

    return (
        <Background>
            <div><h1> <NavLink to="/" className='titles'><i>Chef Creations</i></NavLink> </h1></div>

            { status ? <SignedIn /> : <SignedOut />}
            
        </Background>
    )
}

export default Navbar;
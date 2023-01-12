import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getDoc, getDocs } from 'firebase/firestore/lite';
import { db } from '../../config/fbConfig';
import { collection } from 'firebase/firestore/lite';
import { async } from '@firebase/util';
import { doc } from 'firebase/firestore/lite';

const CentringDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 4rem;

`;

function ProjectDetail() {
    const [dta, setDta] = useState();
    let { id } = useParams();

    useEffect(() => {

        async function handler() {
            const docRef = doc(db, "project", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              //  console.log("Document data:", docSnap.data());
                setDta(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        handler();

    }, []);






    return (
        <>
            

            {dta && (<CentringDiv>

                <h1>{dta.title}</h1>
                <img className='images' src={dta.URIS} />
                <p>{dta.content}</p>
                <p>{dta.date}</p>


            </CentringDiv>)}

        </>

    )
}

export default ProjectDetail
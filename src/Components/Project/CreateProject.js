import { addDoc, getDoc } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { db } from '../../config/fbConfig';
import { collection } from 'firebase/firestore/lite';
import { doc, } from 'firebase/firestore/lite';
import { store } from '../..';
import { addDataFromFireStore } from '../../store/actions/action';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { fileStorage } from '../../config/fbConfig';


const CentringDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    margin: 6rem;
`;

const Input = styled.input`
width: 70vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

const TextArea = styled.textarea`
width: 70vw;
border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding: 1rem 2rem;
    resize: none;
    height: 30vh;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: grey;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;


function CreateProject() {
    const navigate = useNavigate();
    const [title, setTitle] = useState(''); // for title
    const [description, setDescription] = useState(''); // for description
    const [image, setImage] = useState(null);
    const userCollection = collection(db, "project");
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login here
        console.log(title, description);
        const paths = `images/${image.name + v4()}`;
        const imageRef = ref(fileStorage, paths);
        uploadBytes(imageRef, image).then((val) => {
            console.log(val);
            getDownloadURL(ref(fileStorage, paths)).then((url) => {

                console.log("Image URL " + url);

                addDoc(userCollection, {
                    title: title,
                    content: description,
                    date: "September 16 , 2023",
                    URIS: url
                }).then(async (comingData) => {
                    console.log(comingData.id);

                    const docRef = doc(db, "project", comingData.id);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                        const dues = {...docSnap.data(),id:comingData.id}
                        console.log(dues);
                        store.dispatch(addDataFromFireStore(dues))
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }

                    navigate("/");


                }).catch(err => console.log(err))



            }).catch((err) => {
                console.log(err)
            })






        }).catch((err) => {
            console.log(err);
        })
        //  store.dispatch(addPostAction(description,title));



    };


    return (
        <>
            <CentringDiv>
                <form onSubmit={handleSubmit}>
                    <div><h1>Create a New Project</h1></div>

                    <div>
                        <Input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            className='titleInput'
                        />
                    </div>
                    <div>
                        <TextArea
                            type="textarea"
                            placeholder="About the Project"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            className='descriptionInput'



                        />

                    </div>
                    <div>

                        <input type='file' onChange={(event) => {
                            setImage(event.target.files[0])
                        }} />

                    </div>
                    <Button type="submit">Submit</Button>
                </form>

            </CentringDiv>
        </>
    )
}

export default CreateProject
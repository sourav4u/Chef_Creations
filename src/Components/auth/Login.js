import React, { useState } from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/fbConfig';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 300px;
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
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

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login here
    //console.log( username , password )
    signInWithEmailAndPassword( auth  , username , password).then( (UserCredential) => {
      console.log(UserCredential);
      navigate("/");
    } ).catch( (err)=> {
      console.log(err);
    } )
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Mail Address"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;

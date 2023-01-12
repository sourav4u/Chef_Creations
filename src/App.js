import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Layouts/Navbar';
import CreateProject from './Components/Project/CreateProject';
import ProjectDetail from './Components/Project/ProjectDetail';
import Protected from './Components/auth/Protected';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/fbConfig';
import { db } from './config/fbConfig';
import { collection } from 'firebase/firestore/lite';
import { getDocs } from 'firebase/firestore/lite';
import { store } from '.';
import { addDataFromFireStore } from './store/actions/action';





function App() {

  const [status, setStatus] = useState();
// use effect to Fetch all The data.

useEffect( ()=>{ 
  function derivative() {

    const col = collection(db, 'project')

    getDocs(col).then((val) => {
      //console.log(val)

      const data = val.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      //console.log(data);
      data.forEach((val, i) => {

        store.dispatch(addDataFromFireStore(val));

      });


    }).catch((err) => {
      console.log(err);
    });

  }
  derivative();

}, [] )






  onAuthStateChanged(auth, (currentUser) => {
    //  console.log(currentUser);
    setStatus(currentUser);
  });

  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/new' element={<Protected children={<CreateProject />} status={status} />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;

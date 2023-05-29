import React,{useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {login} from './features/authenticationSlice'
import { Routes, Route,Navigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Explore from "./pages/Explore";
import Home from './pages/Home';
import HomeAuth from "./pages/HomeAuth";


const firebaseConfig = {
  apiKey: "AIzaSyDXrY9nB9HBJiW1bKqlQui-1g-XOdwaAWI",
  authDomain: "advertise-and-sell-85df7.firebaseapp.com",
  projectId: "advertise-and-sell-85df7",
  storageBucket: "advertise-and-sell-85df7.appspot.com",
  messagingSenderId: "351930344007",
  appId: "1:351930344007:web:79ec770cca047db4b58762",
  measurementId: "G-Z5D920MPW6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)




function App() {

const dispatch = useDispatch()
const authState = useSelector((state) => state.auth.value)

useEffect(()=>{
  checkLoginState()
},[])

const checkLoginState=async()=>{
  const userId = localStorage.getItem('userId')
  if(userId!== null){
   dispatch(login({signIn: true}))
  }
}

  return (
    <div className="App">

      {authState.signIn ?
      <Routes>
        <Route path="/" element={<HomeAuth />} />
         <Route path="/explore" element={<Explore />} />
         <Route path="/home" element={<HomeAuth />} />
         <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
      :
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/explore" element={<Explore />} />
       <Route path="*" element={<Navigate to='/' replace />} />
    </Routes>
}
    </div>
  );
}

export default App;

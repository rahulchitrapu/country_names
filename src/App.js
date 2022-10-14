
import React from 'react'
import './App.css';
import Homepage from './components/Homepage';
import { useState,useEffect } from 'react'
import Details from "./components/Details";
import { Text,Spinner,Stack,Badge,Input,Select, Button} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import { Route, Routes } from 'react-router';



function App() {
  const[country,setCountry]=useState({})
  const[data,setData]=useState([])


  useEffect(()=>{
    fetch(`https://restcountries.com/v2/all`)
    .then((res)=>res.json())
    .then(data=>{
        
        setData(data)
        
    })

},[])
  function selectedCountry(obj){
    setCountry(obj)
  }
  
  if(data.length===0){
    return<div className='center'>
      <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
      /><br/>
      <Text>Loading...</Text>
    </div>
     
  }

  return (
    <BrowserRouter>
      
        <div className="App">
          <div className='navbar'>
                <Stack direction='row'>
                    <Text ml="30px" fontSize='30px' >Where in the world</Text>
                </Stack>
                <Stack>
                    <Text mr="30px" fontSize="30px">Dark mode</Text>
                </Stack>
            </div>
            <Routes>
              <Route path="/" element={<Homepage myData={data} func={selectedCountry}/>}></Route>
              <Route path="/details" element={ <Details obj={country}/>}></Route>
            </Routes>
          {/* {Object.keys(country).length>0 && <Details obj={country}/>} */}
        </div>
      
    </BrowserRouter>
  );
}

export default App;

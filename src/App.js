
import React from 'react'
import './App.css';
import Homepage from './components/Homepage';
import { useState,useEffect } from 'react'
import Details from "./components/Details";
import { Text,Spinner,Stack} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import { Route, Routes } from 'react-router';
import {useColorMode} from "@chakra-ui/react"




function App() {
  const[country,setCountry]=useState({})
  const[data,setData]=useState([])
  const {toggleColorMode,colorMode}=useColorMode()
  const [countryCode,setCountryCode]=useState("")
 
  const [border,setBorder]=useState({})
  

  useEffect(()=>{
    fetch(`https://restcountries.com/v2/all`)
    .then((res)=>res.json())
    .then(data=>{
        
        setData(data)
        
    })

  },[])

    

  function borderCountry(code){
      
      data.forEach(c=>{
        if(c.alpha3Code===code){
            setCountry(c)
            return 
        }
      })
  }
 

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
                    <Text cursor="pointer" mr="30px" onClick={toggleColorMode} fontSize="30px">{colorMode==="light"?"Dark mode":"Light mode"}</Text>
                </Stack>
            </div>
            <Routes>
              <Route path="/" element={<Homepage myData={data} func={selectedCountry}/>}></Route>
              <Route path="/countries/:code"  element={ <Details func={borderCountry} obj={country}/>}></Route>

            </Routes>
        
        </div>
      
    </BrowserRouter>
  );
}

export default App;

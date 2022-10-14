import React from 'react'
import { useState,useEffect } from 'react'

import { Text,Spinner,Stack,Badge,Input,Select, Button} from '@chakra-ui/react'
import Cardlist from './Cardlist'



export default function Homepage() {
    const[data,setData]=useState([])
    const[search,setSearch]=useState("")
    const [filteredData,setFilteredData]=useState([])
    const [region,setRegion]=useState([])
    const [selectedRegion,setSelectedRegion]=useState("")

    useEffect(()=>{
        fetch(`https://restcountries.com/v2/all`)
        .then((res)=>res.json())
        .then(data=>{
            
            setData(data)
            setFilteredData(data)
            setRegion(Object.values(findRegion(data)))
            
        })

    },[])
    useEffect(()=>{
        if(selectedRegion==""){
            setFilteredData(data)
        }
        else{
            setFilteredData(filterRegion(data,selectedRegion))
        }
    },[selectedRegion])

    function filterRegion(data,reg){
        let arr=data.filter(country=>{
                if(country.region===reg){
                    return country
                }
        })
        return arr
    }
    function searchFunc(){
        console.log("search is working")
        let arr=(data.filter((country)=>{
            if(country.name.toLowerCase().includes(search.toLowerCase())){
                return country
            }
        }))
        setFilteredData(arr)
    }
    function findRegion(data){
        let obj={}
        data.forEach(country=>{
            if(!obj[country.region]){
                obj[country.region]=country.region
            }
        })
        return obj
    }






    if(data.length===0){
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
      />
    }
    

  
  return (
    <div className="container">
        <div className='navbar'>
            <Stack direction='row'>
                <Text ml="20px" fontSize='30px' >Where in the world</Text>
            </Stack>
            <Stack>
                <Text mr="20px" fontSize="30px">Dark mode</Text>
            </Stack>
        </div>
        <div className='flex'>   
                <div className='flex'>

                    <div ><Input placeholder='search' size='lg'  value={search} onChange={(e)=>{setSearch(e.target.value)}} /></div>
                    <div onClick={()=>searchFunc()}><Button >search</Button></div>
                </div>
                <div>
                        <Select value={selectedRegion} onChange={(e)=>{setSelectedRegion(e.target.value)}} placeholder='All'>
                            
                            {
                                region.map((reg)=>{
                                    return <option key={reg} value={reg}>{reg}</option>
                                })
                            }
                            
                        </Select>
                </div>
        </div>
        <div>

            <Cardlist data={filteredData}/>
        </div>
    </div>
  )
}

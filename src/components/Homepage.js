import React from 'react'
import { useState,useEffect } from 'react'

import { Text,Spinner,Stack,Badge,Input,Select, Button} from '@chakra-ui/react'
import Cardlist from './Cardlist'



export default function Homepage({func,myData}) {
    const[data,setData]=useState(myData)
    const[search,setSearch]=useState("")
    const [filteredData,setFilteredData]=useState(myData)
    const [region,setRegion]=useState([])
    const [selectedRegion,setSelectedRegion]=useState("")

    useEffect(()=>{
        if(selectedRegion==""){
            setFilteredData(data)
        }
        else{
            setFilteredData(filterRegion(filteredData,selectedRegion))
        }
        searchFunc()
    },[selectedRegion])
    useEffect(()=>{
        if(search===""){
            if(selectedRegion===""){
                setFilteredData(data)
            }
            else{
                setFilteredData(filterRegion(filteredData,selectedRegion))
            }
            
        }
    },[search])

    useEffect(()=>{
        setRegion(Object.values(findRegion(data)))
       
    },[])

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
                if(selectedRegion===""){
                    return country
                }
                if(country.region===selectedRegion){
                    return country
                }
                
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

    function onChangeHandler(e){
        setSearch(e.target.value)
        searchFunc()
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
       
        <div className='flex'>   
                <div className='flex'>

                    <div ><Input placeholder='search' size='lg'  value={search} onChange={(e)=>{onChangeHandler(e)}} /></div>
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

            <Cardlist data={filteredData} func={func}/>
        </div>
    </div>
  )
}

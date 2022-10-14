import React from 'react'
import Card from './Card'

export default function Cardlist({data,func}) {
  return (
    <div className='grid'>
      {data.map((country)=>{
        return (
            <div key={country.name} >
                <Card country={country} func={func}/>
            </div> 
        )
      })}
    </div>
  )
}

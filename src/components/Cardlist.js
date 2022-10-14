import React from 'react'
import Card from './Card'

export default function Cardlist({data}) {
  return (
    <div className='grid'>
      {data.map((country)=>{
        return (
            <div key={country.name} >
                <Card country={country}/>
            </div> 
        )
      })}
    </div>
  )
}

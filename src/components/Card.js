import React from 'react'
import { Flex, Image,Text,Box,Badge } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Card({country,func}) {
  return (
   <div className='card' onClick={()=>func(country)}>
     <Link to="/details"><Box maxW='sm' margin="10px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        
      <Image w="100%" h="200px" src={country.flags.png} alt={country.name} />

      <Box p='6'>
        

        <Box
          mt='1'
          fontWeight='semibold'
          as='i'
          lineHeight='tight'
          noOfLines={1}
          textAlign="left"
          fontSize="2xl"
        >
          {country.name}
        </Box>
{/*         
        <Text fontSize="xs" textAlign="left">Population  : {country.population}</Text>
        <Text fontSize="xs" textAlign="left">Region : {country.region}</Text>
        <Text fontSize="xs" textAlign="left">Capital : {country.capital}</Text>
        */}
        <Box display='flex'>
            <Text as='b' fontSize='lg'>Population : </Text>
            <Text fontSize='lg'>{country.population}</Text>
        </Box>
        <Box display='flex' >
            <Text as='b' fontSize='lg'>Capital: </Text>
            <Text fontSize='lg'>{country.capital}</Text>
        </Box>
        <Box display='flex'>
            <Text as='b' fontSize='lg'>Region : </Text>
            <Text fontSize='lg'>{country.region}</Text>
        </Box>

        
      </Box>
    </Box>
    </Link>
    </div>
  )
}

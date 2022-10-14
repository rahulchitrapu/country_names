import { Button,Image ,Box,Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Details({obj}) {
    function createBorders(){
        if(!obj.borders){
            obj.borders=[]
        }
    }
    createBorders()
    
  return (
    <div className='details_container'>
        <Box display="flex" w="100%" h="100%" >
            <Box w="50%" h="90vh" display="flex" flexDirection="column" mt="5%"  alignItems="flex-start" justifyContent="flex-start" >
                <Link to="/"><Box display="flex" ml={100}  mb={5} alignItems="left" ><Button>back</Button></Box></Link>
                <Box display="flex" flexDirection="column" mt="5%" alignItems="center" justifyContent="center" ml="10%"><Image w="600px" h="300px" src={obj.flag}></Image></Box>
            </Box>
            <Box flex={2} p={4} >
                <Box flex={2} p={4} display="flex" h='50%' marginTop='15%'>
                    <Box w='90%' m='auto' p={4} height='100%' alignContent="left">
                        <Text align="left" fontSize='5xl' as='b' >{obj.name}</Text>

                        <Box display='flex' ml={4} marginTop='10%'>
                            <Text as='b' fontSize='lg'>Native Name : </Text>
                            <Text fontSize='lg'>{obj.nativeName}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Population : </Text>
                            <Text fontSize='lg'>{obj.population}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Region : </Text>
                            <Text fontSize='lg'>{obj.region}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Sub Region : </Text>
                            <Text fontSize='lg'>{obj.subregion}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Capital : </Text>
                            <Text fontSize='lg'>{obj.capital}</Text>
                        </Box>
                    </Box>
                    <Box w='90%' m='auto' p={4} height='100%' pt='125px'>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Top Level Domain : </Text>
                            <Text fontSize='lg'>{obj.topLevelDomain[0]}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Currencies : </Text>
                            <Text fontSize='lg'>{obj.currencies[0].name}</Text>
                        </Box>
                        <Box display='flex' ml={4}>
                            <Text as='b' fontSize='lg'>Languages : </Text>
                            <Text fontSize='lg'>{obj.languages[0].name}</Text>
                        </Box>
                    </Box>
                </Box>
                {obj.borders.length>0 && <Box w='90%'  p={4} height='15%' mt="-10%"  display='flex' gap={2} justifyContent='center' alignItems='center'>

                    <Text fontSize='lg'>Border Countries :</Text>
                        {obj.borders.map((bor) => {
                            return(
                                <Button colorScheme='blue' variant='outline'>{bor}</Button>
                            
                            )
                        })}
                </Box>}
            </Box>
        </Box>
    </div>
  )
}

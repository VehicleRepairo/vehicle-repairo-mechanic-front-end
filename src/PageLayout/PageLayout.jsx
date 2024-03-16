import React from 'react'
import {Box,Flex} from '@chakra-ui/react'
import Navbar from '../pages/Navbar/Navbar'

const PageLayout = ({children,authUser}) => { 
  return (
    <>
    {authUser && <Navbar />}
    {children}
  </>
  )
}

export default PageLayout

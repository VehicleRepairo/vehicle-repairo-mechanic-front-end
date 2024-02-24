import React from 'react'
import {Box,Flex} from '@chakra-ui/react'
import Navbar from '../pages/Navbar/Navbar'
//import {useLocation} from 'react-router-dom'

const PageLayout = ({children,authUser}) => {
    // const {pathname} = useLocation(); 
  return (
    <>
    {authUser && <Navbar />}
    {children}
  </>
  )
}

export default PageLayout

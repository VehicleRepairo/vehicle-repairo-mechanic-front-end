import React from "react";
import { Container, VStack, Image, Flex, Button, Box } from "@chakra-ui/react";
import {
    Table,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useDisclosure,
  } from '@chakra-ui/react'
import EditProfile from "../../components/Profile/EditProfile";
import useAuthStore from "../../store/authStore";
import useUserProfileStore from "../../store/userProfileStore";

const profile = () => {
    const { userProfile } = useUserProfileStore();
	const authUser = useAuthStore((state) => state.user);
	const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w={900} borderWidth='4px' borderRadius='lg' overflow='hidden' marginLeft={60}>
    <VStack>
        <Container maxW='md'>
         <Flex alignItems={"center"} justifyContent={"center"} gap={10} margin={5} >
            
          <Image
            borderRadius="full"
            boxSize="150px"
            src={authUser.profilePicURL}
            alt="User Profile"
            objectFit='cover'
           
          />
          <Button onClick={onOpen}>Edit Profile</Button>
        </Flex>
        </Container>
      
      <TableContainer>
  <Table variant='simple' size='lg' >
    <TableCaption></TableCaption>
    <Tbody>
    {/* <Tr>
        <Td>ID</Td>
        <Td>{userProfile.uid}</Td>
      </Tr> */}
      <Tr>
        <Td>Name</Td>
        <Td>{authUser.fullName}</Td>
        
      </Tr>
      <Tr>
        <Td>Contact</Td>
        <Td>{authUser.contact}</Td>
      </Tr>
      <Tr>
        <Td>Location</Td>
        <Td>241/1 mw kelaniya</Td>
      </Tr>
      <Tr>
        <Td>Type</Td>
        <Td>{authUser.catergory}</Td>
      </Tr>
      <Tr>
        <Td>Email</Td>
        <Td>{authUser.email}</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Mechanic Profile</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </VStack>
    {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Box>
    
  );
};

export default profile;

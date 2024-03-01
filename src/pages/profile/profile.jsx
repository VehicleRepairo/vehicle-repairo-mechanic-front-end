import React, { useState, useEffect } from "react";
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
import { StarIcon } from '@chakra-ui/icons'

const Profile = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore((state) => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [location, setLocation] = useState({ city: '', address: '' }); // State to store location data

    useEffect(() => {
        // Function to fetch location data when the component mounts
        const fetchLocation = async () => {
            try {
                const response = await fetch('http://localhost:8000/location', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ uid: authUser.uid }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch location');
                }

                const data = await response.json();
                setLocation(data);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        fetchLocation(); // Call the fetchLocation function
    }, [authUser.uid]); // Make sure to include authUser.uid in the dependency array to re-fetch location when it changes

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
                            <Tr>
                                <Td>Name</Td>
                                <Td>{authUser.fullName}</Td>
                            </Tr>
                            <Tr>
                                <Td>Contact</Td>
                                <Td>{authUser.contact}</Td>
                            </Tr>
                            <Tr>
                                <Td>City</Td>
                                <Td>{location.city || 'Enter your city'}</Td> 
                            </Tr>
                            <Tr>
                                <Td>Address</Td>
                                <Td>{location.address || 'Enter your address'}</Td> 
                            </Tr>
                            <Tr>
                                <Td>Type</Td>
                                <Td>{authUser.catergory}</Td>
                            </Tr>
                            <Tr>
                                <Td>Email</Td>
                                <Td>{authUser.email}</Td>
                            </Tr>
                            <Tr>
                                <Td>Ratings</Td>
                                <Td><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Td>
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

export default Profile;

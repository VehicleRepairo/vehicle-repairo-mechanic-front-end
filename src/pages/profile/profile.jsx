import React, { useState, useEffect } from "react";
import { Container, VStack, Image, Flex, Button, Box, Stack } from "@chakra-ui/react";
import { Table, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, useDisclosure } from '@chakra-ui/react';
import EditProfile from "../../components/Profile/EditProfile";
import useAuthStore from "../../store/authStore";
import useUserProfileStore from "../../store/userProfileStore";
import { StarIcon } from '@chakra-ui/icons';

const Profile = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore((state) => state.user);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [location, setLocation] = useState({ city: '', address: '' });

    useEffect(() => {
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

        fetchLocation();
    }, [authUser.uid]);

    return (
        <Container maxW='xl'>
            <Flex direction={{ base: "column", md: "row" }} align={{ base: "center", md: "stretch" }} justify="center" gap={5}>
                <Box flex="1">
                    <Flex alignItems="center" justifyContent="center" gap={10}>
                        <Image
                            borderRadius="full"
                            boxSize={{ base: "100px", md: "150px" }}
                            src={authUser.profilePicURL}
                            alt=""
                            objectFit='cover'
                        />
                        <Button onClick={onOpen}>Edit Profile</Button>
                    </Flex>
                </Box>
                <Box flex="2">
                    <TableContainer>
                        <Table variant='simple' size='lg'>
                            <TableCaption></TableCaption>
                            <Tbody>
                                <Tr>
                                    <Td>ID</Td>
                                    <Td>{location.mechanic_id || 'Enter Location to receive an id'}</Td>
                                </Tr>
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
                </Box>
            </Flex>
            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
        </Container>
    );
};

export default Profile;

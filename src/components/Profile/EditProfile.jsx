import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import useAuthStore from "../../store/authStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import useEditProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowToast";

const EditProfile = ({ isOpen, onClose }) => {
	const authUser = useAuthStore((state) => state.user);
	const fileRef = useRef(null);
	const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
	const { isUpdating, editProfile } = useEditProfile();
	const showToast = useShowToast();
    const [inputs, setInputs] = useState({
        fullName: authUser.fullName || "",
        contact: authUser.contact || "",
        catergory: authUser.catergory || "",
		location: "",
		address:""
	});

	const handleEditProfile = async () => {
		try {
			console.log(authUser.uid)
            console.log(inputs)
            console.log(selectedFile)
			await editProfile(inputs, selectedFile);
			await fetch("https://vehicle-repairo-back-end-95880a9904c7.herokuapp.com/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
					
                    firebase_uid: authUser.uid,
                    address: inputs.location,
					location:inputs.address
					
                })
            });
			setSelectedFile(null);
			onClose();
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"white"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						{/* Container Flex */}
						<Flex bg={"white"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"white"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar
												size='xl'
												src={selectedFile || authUser.profilePicURL}
												border={"2px solid white "}
											/>
										</Center>
										<Center w='full'>
											<Button w='full' onClick={() => fileRef.current.click()}>
												Edit Profile Picture
											</Button>
										</Center>
										<Input type='file' hidden ref={fileRef} onChange={handleImageChange} />
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input
										placeholder={"Full Name"}
										size={"sm"}
										type={"text"}
										value={inputs.fullName || authUser.fullName}
										onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Contact</FormLabel>
									<Input
										placeholder={"Contact"}
										size={"sm"}
										type={"text"}
										value={inputs.contact || authUser.contact}
										onChange={(e) => setInputs({ ...inputs, contact: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Type</FormLabel>
									<Input
										placeholder={"Type"}
										size={"sm"}
										type={"text"}
										value={inputs.catergory || authUser.catergory}
										onChange={(e) => setInputs({ ...inputs, catergory: e.target.value })}
									/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>City</FormLabel>
									<Input
										placeholder={"Enter your location"}
										size={"sm"}
										type={"text"}
										value={inputs.location}
										onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
									/>
								</FormControl>
								
								<FormControl>
									<FormLabel fontSize={"sm"}>Address</FormLabel>
									<Input
										placeholder={"Address"}
										size={"sm"}
										type={"text"}
										value={inputs.address}
										onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
									/>
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"red.400"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }}
										onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"blue.400"}
										color={"white"}
										size='sm'
										w='full'
										_hover={{ bg: "blue.500" }}
										onClick={handleEditProfile}
										isLoading={isUpdating}
                                      
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;
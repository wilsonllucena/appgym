import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";
import {MaterialIcons} from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";
import { useAuth } from "@hooks/auth";

export function HomeHeader(){
    const { signOut } = useAuth()
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center"> 
            <UserPhoto 
                source={{ uri: "https://avatars.githubusercontent.com/u/13472984?v=4"}}
                alt="imagem"
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text 
                    color="gray.100"
                    fontSize="md"
                >
                Olá
                </Text>
                <Heading 
                    color="gray.100"
                    fontSize="md"
                >
                    Wilson
                </Heading>
            </VStack>
            <TouchableOpacity onPress={signOut}>
                <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
            </TouchableOpacity>
        </HStack>
    )
}


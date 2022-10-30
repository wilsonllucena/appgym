import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons"
type Props = TouchableOpacityProps & {

}
export function ExerciseCard({...rest}:Props){
    return (
        <TouchableOpacity 
            {...rest}
        >
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image
                    source={{ uri: "https://www.dicasdetreino.com.br/wp-content/uploads/2016/12/treino-para-trincar-b%C3%ADceps-1024x640.jpg"}} 
                    alt="Imagem de treino"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading
                        fontSize="lg"
                        color="white"
                    >
                        Biceps com barra
                    </Heading>
                    <Text
                        color="gray.200"
                        fontSize="sm"
                        mt={1}
                        numberOfLines={2}
                    >
                        3 série x 15 repetições
                    </Text>
                </VStack>
                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
            </HStack>
        </TouchableOpacity>
    )
}
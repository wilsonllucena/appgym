import { useNavigation } from "@react-navigation/native";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base"
import BackgroundIMG from "@assets/background.png"
import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatiorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
    const navigation = useNavigation<AuthNavigatiorRoutesProps>();
    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image
                    source={BackgroundIMG}
                    defaultSource={BackgroundIMG}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />
                <Center my={24}>
                    <LogoSVG />
                    <Text color="gray.100">O corpo alcança o que a mente acredita.</Text>
                </Center>
                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >Acesse sua conta</Heading>
                    <Input
                        placeholder="Usuário"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry

                    />
                    <Button title="Acessar" />
                </Center>
                <Center mt={24}>
                    <Text
                        color="gray.100"
                        fontSize="sm"
                        mb={3}
                        fontFamily="body"
                    >
                        Ainda não tem acesso ?
                    </Text>
                </Center>

                <Button onPress={handleNewAccount} title="Criar conta" variant="outline" />

            </VStack>
        </ScrollView>
 
    )
}
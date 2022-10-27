import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base"
import BackgroundIMG from "@assets/background.png"
import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatiorRoutesProps } from "@routes/auth.routes";

export function SignUp() {
    const navigation = useNavigation<AuthNavigatiorRoutesProps>();
    function handleGoBackSignIn() {
        navigation.navigate("signIn")
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image
                    source={BackgroundIMG}
                    alt="Pessoas treinando"
                    resizeMode="contain"
                    position="absolute"
                />
                <Center my={24}>
                    <LogoSVG />
                    <Text color="gray.100"> Treine sua mente e o seu corpo</Text>
                </Center>
                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >Crie sua conta</Heading>
                    <Input
                        placeholder="Nome"
                    />   
                    
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry

                    />
                    <Button title="Criar e Acessar" />
                </Center>
         

                <Button onPress={handleGoBackSignIn} mt={24} title="Voltar para login" variant="outline" />

            </VStack>
        </ScrollView>
 
    )
}
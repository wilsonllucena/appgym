import { useNavigation } from "@react-navigation/native";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base"
import BackgroundIMG from "@assets/background.png"
import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatiorRoutesProps } from "@routes/auth.routes";
import { useAuth } from "@hooks/auth";
import { useCallback, useRef, useState } from "react";
import * as Yup from 'yup';
import { Alert } from "react-native";

export function SignIn() {
    const formRef = useRef<any>(null);
    const [ email , setEmail] = useState("");
    const [ password , setPassword] = useState("");
    const navigation = useNavigation<AuthNavigatiorRoutesProps>();
    const { signIn } = useAuth();

    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    const handleSignIn = useCallback(
        async () => {
            // Validando
            try {
                formRef.current?.setErrors({});
                const schema = Yup.object().shape({
                    email: Yup.string()
                        .required('E-mail obrigatório')
                        .email('Email inválido'),
                    password: Yup.string().required('Senha obrigatória'),
                });
                const data = {
                    email: email,
                    password: password,
                }

                await schema.validate(data, {
                    abortEarly: false,
                });

                await signIn({
                    email: data.email,
                    password: data.password,
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    formRef.current?.setErrors(err);
                    return;
                }
                Alert.alert(
                    'Error na autenticação',
                    'Ocorreu um error ao fazer login'
                );
            }
        },
        [signIn],
    );

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
                        onChangeText={ text => setEmail(text) }
                        value={email}
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                        onChangeText={text => setPassword(text)}
                        value={password}

                    />
                    <Button title="Acessar" onPress={() => handleSignIn()} />
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
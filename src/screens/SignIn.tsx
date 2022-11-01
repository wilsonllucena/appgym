import { useNavigation } from "@react-navigation/native";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base"
import BackgroundIMG from "@assets/background.png"
import LogoSVG from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatiorRoutesProps } from "@routes/auth.routes";
import { useAuth } from "@hooks/auth";
import { useCallback, useRef, useState } from "react";
import * as yup from 'yup';
import { Alert } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type FormDataProps = {
    email: string;
    password: string;
}
const signInSchema = yup.object({
    email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
});

export function SignIn() {
    const navigation = useNavigation<AuthNavigatiorRoutesProps>();
    const { signIn } = useAuth();

    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signInSchema),
    });

    const handleSignIn = useCallback(
        async({  email, password }: FormDataProps) => {
            try {
                await signIn({
                    email,
                    password
                });
            } catch (err) {
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

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Senha"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />
                    <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
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
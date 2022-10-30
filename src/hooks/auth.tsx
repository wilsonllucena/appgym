import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '@services/api';

interface User {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
}
interface AuthState {
    token: string;
    user: User;
}
interface SignInCredesentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    loading: boolean
    signIn(credentials: SignInCredesentials): Promise<void>;
    signOut(): void;
    updateUser(user: User): Promise<void>;
}

const Auth = createContext<AuthContextData>({} as AuthContextData);

type AuthProps = {
    children: React.ReactNode
}
export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadStorageData(): Promise<void> {
            const token = await AsyncStorage.getItem('@GoBarber:token');
            const user = await AsyncStorage.getItem('@GoBarber:user');

            if (token && user) {
                api.defaults.headers.authorization = `Bearer ${token}`;
                setData({ token: token, user: JSON.parse(user) })
            }
            setLoading(false)
        }
        loadStorageData();
    }, [])

    const signIn = useCallback(async ({ email, password }: SignInCredesentials) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        await AsyncStorage.multiSet(
            [
                ['@GoBarber:token', token],
                ['@GoBarber:user', JSON.stringify(user)]
            ]
        );
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({ token, user });
    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove([
            '@GoBarber:token',
            '@GoBarber:user'
        ]);
        setData({} as AuthState);
    }, []);

    const updateUser = useCallback(
        async (user: User) => {
            await AsyncStorage.setItem('@GoBarber:user', JSON.stringify(user));
            setData({
                token: data.token,
                user,
            });
        },
        [setData, data.token],
    );

    return (
        <Auth.Provider value={{ user: data.user, loading, signIn, signOut, updateUser }}>
            {children}
        </Auth.Provider>
    );
};

// criando um hook
export function useAuth(): AuthContextData {
    const context = useContext(Auth);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import HomeSVG from "@assets/home.svg";
import HistorySVG from "@assets/history.svg";
import ProfileSVG from "@assets/profile.svg";
import { useTheme } from "native-base";
import { Platform } from "react-native";

type AppRoutes = {
    home: undefined,
    exercise: undefined,
    history: undefined,
    profile: undefined,
}

//Tipagem para a navegação de rotas publicas 
export type AppNavigatiorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { sizes, colors } = useTheme();
    const iconSize = sizes[6]
    return (
        <Navigator 
            screenOptions={{
                 headerShown: false, 
                 tabBarShowLabel: false,
                 tabBarActiveTintColor: colors.green[500],
                 tabBarInactiveTintColor: colors.green[200],
                 tabBarStyle: {
                    backgroundColor: colors.gray[600],
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? "auto": 96,
                    paddingBottom: sizes[10],
                    paddingTop: sizes[6]
                 }
             }}>
            <Screen 
                name="home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSVG fill={color} width={iconSize} height={iconSize} />
                    )
                }}
             />
            <Screen 
                name="history" 
                component={History} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySVG fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />
            <Screen 
                name="profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSVG fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />
            <Screen 
                name="exercise" 
                component={Exercise} 
                options={{
                    tabBarButton:() => null //Rack para ocultar button
                }}
            />
        </Navigator>
    )
}

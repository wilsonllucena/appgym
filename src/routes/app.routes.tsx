import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

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
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="history" component={History} />
            <Screen name="profile" component={Profile} />
            <Screen name="exercise" component={Exercise} />
        </Navigator>
    )
}
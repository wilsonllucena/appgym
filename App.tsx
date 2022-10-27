import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Text, View } from 'react-native';
export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (

    <View>
      {fontsLoaded ? <Text>Hello Gym</Text> : ""}
    </View>
  );
}



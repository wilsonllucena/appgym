import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, View } from 'native-base';
import { StatusBar} from 'react-native';
import { THEME } from './src/theme';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import AppProvider from '@hooks/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AppProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AppProvider>
    </NativeBaseProvider>
  );
}



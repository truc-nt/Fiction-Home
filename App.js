import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import OnBoard from './screens/OnBoard';
import Register from './screens/Register';
import { useFonts } from 'expo-font'; 

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    LexendExtraLight: require("./assets/font/static/Lexend-ExtraLight.ttf"),
    LexendRegular: require("./assets/font/static/Lexend-Regular.ttf"),
    LexendSemiBold: require("./assets/font/static/Lexend-SemiBold.ttf"),
    LexendBold: require("./assets/font/static/Lexend-Bold.ttf"),
    LexendMedium: require("./assets/font/static/Lexend-Medium.ttf"),
  })
  if (!fontLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

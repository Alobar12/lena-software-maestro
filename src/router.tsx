import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "./pages/Home/Home";

import BlogDetail from "./pages/BlogDetail/BlogDetail";

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="BlogDetail" component={BlogDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router
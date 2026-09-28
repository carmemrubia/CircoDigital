import React from "react"
import { View } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useFonts, Bungee_400Regular } from "@expo-google-fonts/bungee"
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand"
import Tela1 from "./src/Tela1"
import Tela2 from "./src/Tela2"
import Tela3 from "./src/Tela3"
import Tela4 from "./src/Tela4"

const Tab = createBottomTabNavigator()

const icone = (nome) => ({ color, size }) => (
  <MaterialCommunityIcons name={nome} color={color} size={size} />
)

function Abas() {
  const insets = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FF0000" },
        headerTintColor: "#FFF",
        headerTitleAlign: "center",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: "#0072CE",
        tabBarInactiveTintColor: "#9A9A9A",
        tabBarStyle: {
          backgroundColor: "#FFF6E5",
          height: 56 + insets.bottom,
          paddingBottom: insets.bottom + 6,
          paddingTop: 6
        },
        tabBarLabelStyle: { fontSize: 12 }
      }}>
      <Tab.Screen
        name="Tela1"
        component={Tela1}
        options={{ title: "Circo Digital", tabBarLabel: "Início", tabBarIcon: icone("home") }} />
      <Tab.Screen
        name="Tela2"
        component={Tela2}
        options={{ title: "Elenco", tabBarLabel: "Elenco", tabBarIcon: icone("account-group") }} />
      <Tab.Screen
        name="Tela3"
        component={Tela3}
        options={{ title: "Mais Elenco", tabBarLabel: "Mais", tabBarIcon: icone("drama-masks") }} />
      <Tab.Screen
        name="Tela4"
        component={Tela4}
        options={{ title: "O Circo", tabBarLabel: "Circo", tabBarIcon: icone("party-popper") }} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [fontesProntas] = useFonts({ Bungee_400Regular, Quicksand_700Bold })

  if (!fontesProntas) {
    return <View style={{ flex: 1, backgroundColor: "#FFF6E5" }} />
  }

  return (
    <SafeAreaProvider>
      <NavigationIndependentTree>
        <NavigationContainer>
          <Abas />
        </NavigationContainer>
      </NavigationIndependentTree>
    </SafeAreaProvider>
  )
}
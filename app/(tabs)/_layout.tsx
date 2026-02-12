import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
return (
<>
<StatusBar style="light" />

<Stack
  screenOptions={{
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor: "#1877F2",
    headerTitle: "",
  }}
>

  <Stack.Screen
    name="index"
    options={{ headerShown: false }}
  />

  <Stack.Screen
    name="Facebook"
    options={{ title: "" }}
  />

</Stack>

</>
)
}
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { FontAwesome } from "@expo/vector-icons";


export default function Index() {
const router = useRouter()
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
justifyContent: "center",
padding: 20
},
logo: {
fontSize: 42,
fontWeight: "bold",
color: "#1877F2",
textAlign: "center",
marginBottom: 40
},
input: {
borderWidth: 1,
borderColor: "#ddd",
borderRadius: 6,
padding: 12,
marginBottom: 12
},
loginBtn: {
backgroundColor: "#1877F2",
padding: 14,
borderRadius: 6,
alignItems: "center",
marginTop: 5
},
loginText: {
color: "#fff",
fontSize: 16,
fontWeight: "600"
},
forgot: {
textAlign: "center",
color: "#1877F2",
marginTop: 15
},
divider: {
height: 1,
backgroundColor: "#ddd",
marginVertical: 25
},
createBtn: {
backgroundColor: "#42B72A",
padding: 14,
borderRadius: 6,
alignItems: "center"
},
createText: {
color: "#fff",
fontSize: 16,
fontWeight: "600"
}
})


return (
<View style={styles.container}>
<Text style={styles.logo}>facebook</Text>

<TextInput
placeholder="อีเมลหรือเบอร์โทรศัพท์"
style={styles.input}
/>

<TextInput
placeholder="รหัสผ่าน"
secureTextEntry
style={styles.input}
/>

<TouchableOpacity
style={styles.loginBtn}
onPress={() => router.navigate('/Facebook')}
>
<Text style={styles.loginText}>เข้าสู่ระบบ</Text>
</TouchableOpacity>

<Text style={styles.forgot}>ลืมรหัสผ่านใช่ไหม?</Text>

<View style={styles.divider} />

<TouchableOpacity
style={styles.createBtn}
onPress={() => router.navigate('/signup')}
>
<Text style={styles.createText}>สร้างบัญชีใหม่</Text>
</TouchableOpacity>

</View>
)
}
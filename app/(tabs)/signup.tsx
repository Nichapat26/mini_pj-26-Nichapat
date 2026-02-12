import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"

export default function Signup() {
const router = useRouter()

return (
<View style={styles.container}>
<Text style={styles.title}>สร้างบัญชีใหม่</Text>

<TextInput style={styles.input} placeholder="ชื่อ" />
<TextInput style={styles.input} placeholder="นามสกุล" />
<TextInput style={styles.input} placeholder="อีเมล" />
<TextInput style={styles.input} placeholder="รหัสผ่าน" secureTextEntry />

<TouchableOpacity style={styles.btn}>
<Text style={styles.btnText}>สมัครสมาชิก</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => router.back()}>
<Text style={styles.back}>กลับหน้าเข้าสู่ระบบ</Text>
</TouchableOpacity>
</View>
)
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
padding: 20
},
title: {
fontSize: 28,
fontWeight: "bold",
marginBottom: 20,
textAlign: "center"
},
input: {
borderWidth: 1,
borderColor: "#ddd",
borderRadius: 6,
padding: 12,
marginBottom: 12
},
btn: {
backgroundColor: "#42B72A",
padding: 14,
borderRadius: 6,
alignItems: "center"
},
btnText: {
color: "#fff",
fontSize: 16,
fontWeight: "600"
},
back: {
textAlign: "center",
marginTop: 15,
color: "#1877F2"
}
})
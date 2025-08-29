// app/(tabs)/profile.tsx
import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

export default function ProfileScreen() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  if (!loggedIn) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: "800", marginBottom: 12 }}>Đăng nhập</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="Email" style={{ borderWidth: 1, borderColor: "#e5e7eb", padding: 12, borderRadius: 8, marginBottom: 10 }} />
          <TextInput value={pw} onChangeText={setPw} placeholder="Mật khẩu" secureTextEntry style={{ borderWidth: 1, borderColor: "#e5e7eb", padding: 12, borderRadius: 8, marginBottom: 10 }} />
          <TouchableOpacity onPress={() => { if (!email || !pw) return Alert.alert("Nhập email và mật khẩu"); setLoggedIn(true); }} style={{ backgroundColor: "#0C3C78", padding: 12, borderRadius: 8 }}>
            <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 12 }}>
            <Text>Chưa có tài khoản? </Text>
            <Text style={{ color: "#0C3C78", fontWeight: "700" }}>Đăng ký</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "800" }}>Xin chào,</Text>
      <Text style={{ marginTop: 8, color: "#374151" }}>{email}</Text>
      <TouchableOpacity onPress={() => setLoggedIn(false)} style={{ marginTop: 20, backgroundColor: "#ef4444", padding: 10, borderRadius: 8 }}>
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>Đăng xuất</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

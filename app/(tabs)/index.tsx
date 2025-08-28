import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const menuItems = [
    { title: "Giới thiệu", icon: "information-circle-outline", route: "/gioi-thieu" },
    { title: "Đào tạo", icon: "school-outline", route: "/dao-tao" },
    { title: "Dự án", icon: "rocket-outline", route: "/du-an" },
    { title: "Mentors", icon: "people-circle-outline", route: "/mentors" },
    { title: "MSCer", icon: "person-circle-outline", route: "/mscer" },
    { title: "Đồng hành", icon: "hand-left-outline", route: "/dong-hanh" },
    { title: "Chia sẻ", icon: "chatbubbles-outline", route: "/chia-se" },
    { title: "Liên hệ", icon: "call-outline", route: "/lien-he" },
  ];

  return (
    <LinearGradient colors={["#0f172a", "#1e293b", "#0f172a"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View style={{ marginBottom: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
            MSC Fullstack App 🚀
          </Text>
          <Text style={{ fontSize: 16, color: "#cbd5e1", marginTop: 5 }}>
            Học tập - Dự án - Kết nối - Chia sẻ
          </Text>
        </View>

        {/* Menu Grid */}
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => router.push(item.route)}
              style={{
                width: "48%",
                backgroundColor: "rgba(255,255,255,0.08)",
                padding: 20,
                borderRadius: 16,
                marginBottom: 15,
                alignItems: "center",
              }}
            >
              <Ionicons name={item.icon as any} size={32} color="#38bdf8" />
              <Text style={{ color: "white", marginTop: 10, fontWeight: "600" }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

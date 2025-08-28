import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

type Mentor = {
  id: string;
  name: string;
  bio: string;
};

const mentors: Mentor[] = [
  { id: "1", name: "Nguyễn Văn A", bio: "Chuyên gia React" },
  { id: "2", name: "Trần Văn B", bio: "Backend Node.js" }
];

export default function MentorDetail() {
  const { slug } = useLocalSearchParams();
  const mentor = mentors.find((m) => m.id === slug);

  if (!mentor) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Không tìm thấy mentor</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{mentor.name}</Text>
      <Text style={{ marginTop: 8 }}>{mentor.bio}</Text>
    </View>
  );
}

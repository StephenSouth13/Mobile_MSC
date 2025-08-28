import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

type Project = {
  id: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  { id: "p1", title: "App học tập", description: "Dự án React Native" },
  { id: "p2", title: "Web Fullstack", description: "Next.js + Express" }
];

export default function ProjectDetail() {
  const { slug } = useLocalSearchParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Không tìm thấy dự án</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{project.title}</Text>
      <Text style={{ marginTop: 8 }}>{project.description}</Text>
    </View>
  );
}

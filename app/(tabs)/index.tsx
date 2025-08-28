import React from "react";
import { View, Text, FlatList } from "react-native";

type Post = {
  id: string;
  title: string;
  content: string;
};

const posts: Post[] = [
  { id: "1", title: "Xin chào MSC", content: "Demo content" },
  { id: "2", title: "React Native App", content: "Lấy data từ API" }
];

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

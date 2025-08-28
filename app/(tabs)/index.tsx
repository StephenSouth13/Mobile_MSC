// app/(tabs)/index.tsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Màn hình Trang chủ</Text>
    </SafeAreaView>
  );
}
// app/(tabs)/_layout.tsx

import { Tabs } from 'expo-router';
import React from 'react';
// --- SỬA LỖI 1: Import icon từ các gói con cụ thể ---
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Một component trợ giúp để render icon dễ dàng hơn
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0C3C78', // Primary color for active tab
        tabBarInactiveTintColor: 'gray',    // Gray for inactive tab
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 80,
          paddingBottom: 25,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Khóa học',
          // --- SỬA LỖI 2: Sử dụng icon Feather cho "book-open" ---
          tabBarIcon: ({ color }) => <Feather name="book-open" size={24} color={color} style={{ marginBottom: -3 }} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Dự án',
          tabBarIcon: ({ color }) => <TabBarIcon name="bullseye" color={color} />, // 'bullseye' là icon tương đương 'target'
        }}
      />
      <Tabs.Screen
        name="articles"
        options={{
          title: 'Chia sẻ',
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper-o" color={color} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
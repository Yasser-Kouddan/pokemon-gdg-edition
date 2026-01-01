import { Link, Tabs } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{     
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'PokéBall',
          headerShown: false,
          tabBarStyle: { backgroundColor: "#748c11"},
          tabBarIcon: ({ color }) => <TabBarIcon name="pokeball" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pokedex"
        options={{
          title: 'PokéDex',
          tabBarStyle: { backgroundColor: "#4987a0"},
          headerStyle: { backgroundColor: "#4987a0"},
          tabBarIcon: ({ color }) => <TabBarIcon name="book-information-variant" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="cog"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

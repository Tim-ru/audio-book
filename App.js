import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import BooksScreen from './src/screens/BooksScreen'
import NotesScreen from './src/screens/NotesScreen'

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused ? 'home' : 'home-outline';
            }
            else if (route.name === 'BooksScreen') {
              iconName = focused ? 'book' : 'book-outline';
            }
            else if (route.name === "NotesScreen") {
              iconName = focused ? 'pencil' : 'pencil';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#A5475B',
          inactiveTintColor: '#0CBCF2',
          style: {backgroundColor: '#641E8E', borderTopRightRadius: 30,  borderTopLeftRadius: 30,}
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          name="BooksScreen"
          component={BooksScreen}

        />
        <Tab.Screen name="NotesScreen" component={NotesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // main: {
  //   fontFamily: '',
  // },

})

import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} style={styles.navButton} />
        <Tab.Screen name="Books" component={SettingsScreen} style={styles.navButton} />
      </Tab.Navigator>
    );
  }

export const Header = props => {
    return (
        <View style={styles.header}>
            <View style={styles.navbar}>
                <Text style={styles.textLogo}>AudioBook</Text>
                <NavigationContainer >
                    <MyTabs />
                </NavigationContainer>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#641E8E',
        paddingBottom: 10,
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    textLogo: {
        fontFamily: 'Poppins',
        fontSize: 24,
    },
    navButton: {
        borderWidth: 2,
        borderColor: '#750CF2'
    }
    
})
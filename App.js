import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import các màn hình của bạn
import Home from './Screens/Home';
import LaunchScreen from './Screens/LaunchScreen';
import TopScreen from './Screens/TopScreen';
import LaunchScreenPremium from './Screens/LaunchScreenPremium';
import FeedAudioListing from './Screens/FeedAudioListing';
import Library from './Screens/Library';

import Search from './Screens/Search';
import ArtistProfile from './Screens/ArtistProfile';
import PlayAudioScreen from './Screens/PlayAudioScreen';
import CreateAccount from './Screens/CreateAccount';
import LoginAccount from './Screens/LoginAccount';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ArtistProfile" component={ArtistProfile} />
      <Stack.Screen name="FeedAudioListing" component={FeedAudioListing} />
      <Stack.Screen name="Library" component={Library} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="PlayAudioScreen" component={PlayAudioScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedAudioListing}
        options={{
          title: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="reader-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          title: 'Library',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen name="ArtistProfile" component={ArtistProfile} />
          <Stack.Screen name="PlayAudioScreen" component={PlayAudioScreen} />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="LoginAccount" component={LoginAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

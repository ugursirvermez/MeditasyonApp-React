import React from 'react';
import {Tabs} from 'expo-router';
import Colors from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const TabsLayout = () => {
  return (
   <Tabs screenOptions={{headerShown:false, 
                         tabBarActiveTintColor: Colors.primary}}>
    
    <Tabs.Screen name ="nature-meditate" options={{tabBarLabel:"Meditate",
                                                   tabBarIcon:({color}) => (
                                                   <MaterialCommunityIcons name="flower-tulip" size={24} color={color} />)
    }}/>

    <Tabs.Screen name ="affirmations" options={{tabBarLabel:"Affirmations",
                                                   tabBarIcon:({color}) => (
                                                    <MaterialCommunityIcons name="book-open-variant" size={24} color={color} />)
    }}/>

   </Tabs>
  )
}

export default TabsLayout;
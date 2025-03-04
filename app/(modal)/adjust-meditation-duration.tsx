import { View, Text, Pressable } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {router} from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { useContext } from "react";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
    
    const { setDuration } = useContext(TimerContext);

    const handlePress = (duration: number) => {
        setDuration(duration);
        router.back();
    };

  return (
    <View style={{flex:1}}>
        <AppGradient colors={["#161b2e","#0a4d4a","#766e67"]}>
      <Pressable onPress={() => router.back()} style={{flex:1, paddingRight:"80%"}}>
            <FontAwesome5 name="arrow-circle-left" size={50} color="white" />
            </Pressable>  

        <View style={{flex:12,justifyContent:"center",}}>
            <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20, color:"white"}}>
                AdjustMeditationDuration
            </Text>
        </View>

        <View style={{flex:1, backgroundColor:"white",justifyContent:"center",
                    overflow:"hidden",borderRadius: 50, alignItems:"center", marginBottom:"8%"}}>
            <CustomButton title="10 Seconds" onPress={() => handlePress(10)}/>
        </View>

        <View style={{flex:1, backgroundColor:"white",justifyContent:"center",
                    overflow:"hidden",borderRadius: 50, alignItems:"center", marginBottom:"8%"}}>
            <CustomButton title="5 Minutes" onPress={() => handlePress(5*60)}/>
        </View>
        <View style={{flex:1, backgroundColor:"white",justifyContent:"center",
                    overflow:"hidden",borderRadius: 50, alignItems:"center", marginBottom:"8%"}}>
            <CustomButton title="10 Minutes" onPress={() => handlePress(10*60)}/>
        </View>
        <View style={{flex:1, backgroundColor:"white",justifyContent:"center",
                    overflow:"hidden",borderRadius: 50, alignItems:"center", marginBottom:"8%"}}>
            <CustomButton title="15 Minutes" onPress={() => handlePress(15*60)}/>
        </View>
      </AppGradient>
    </View>
  )
}

export default AdjustMeditationDuration;
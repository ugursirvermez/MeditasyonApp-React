import { View, StyleSheet, Text, StatusBar, FlatList, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import {MEDITATION_DATA, MeditationType} from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import {router} from 'expo-router';

const NatureMeditate = () => {
  return (
    <View style={styles.headline}>
      <AppGradient colors={["#161b2e", "#0a4d4a","#766e67"]}>
      
      <View style={{flex:1}}>
      <Text style={styles.HeadText}>
        Meditation App </Text>
      <Text style={styles.MidText}> 
        Today is the day! You learn meditation and for that you keep doing practices! 
        </Text>
        </View>
        
      <View style={{flex:6}}>  
      <FlatList data={MEDITATION_DATA}
                contentContainerStyle={styles.list}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) =>(

                <Pressable onPress={() => router.push(`/meditate/${item.id}`)}
                           style={{padding:"2%"}}>

                <ImageBackground source={MEDITATION_IMAGES[item.id-1]}
                resizeMode='cover'
                style={styles.backgroundImage}>
              
                <Text style={{fontSize:23, padding:"25%", fontWeight:"bold",color:"white"}}>
                {item.title}</Text>
               
                </ImageBackground>         
                </Pressable>
                )}/>
      </View>
      </AppGradient>
    <StatusBar barStyle={'default'}/>
    </View>
  )
}

const styles = StyleSheet.create({

    headline:{flex:1, fontWeight: 'bold', fontSize:25, color:"white",
    justifyContent:"center",textAlign: 'center', alignItems:"center"},
  
    HeadText:{flex:2, fontWeight:'bold', fontSize:24, color:"white",
      paddingRight:"35%", justifyContent:"space-between", textAlign:"left", alignItems:"flex-start"},
    
    MidText:{flex:3, fontSize:15, color:"white"},

    list: {flexGrow:1,paddingBottom:"10%",justifyContent:"space-between"},
    
    backgroundImage: {flex:3,overflow:"hidden",borderRadius: 20, padding:"10%",
      alignItems:"center", justifyContent: "space-between"}
  });

export default NatureMeditate;
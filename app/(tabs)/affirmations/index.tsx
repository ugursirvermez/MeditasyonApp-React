import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from "expo-status-bar";
import AppGradient from '@/components/AppGradient';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import GuidedAffirmationGallery from '@/components/GuidedAffirmationsGallery';

const Affirmations = () => {
  return (
    <View style={{flex:1}}>
    <AppGradient colors={["#2e1f58","#54426b","#a790af"]}>
    <ScrollView showsVerticalScrollIndicator={false}>
    
      <Text style={{color:"white", fontWeight:"bold",fontSize:20}}>
        Believes with Affirmations can change!
      </Text>
      <View style={{flex:1}}>
       {AFFIRMATION_GALLERY.map((g) =>(
            <GuidedAffirmationGallery key={g.title} title={g.title} previews={g.data}/>
       ))} 
      </View>
    </ScrollView>
    </AppGradient>
    <StatusBar style="light"/>
    </View>
  )
}

export default Affirmations;
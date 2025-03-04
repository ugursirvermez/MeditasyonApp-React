import { View, Text,StyleSheet, ImageBackground, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams,router } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const AffirmationsPractice = () => {
const {itemId} = useLocalSearchParams();

const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
const [sentences, setSentences] = useState<string[]>([]);

useEffect(() => {
    for (let idx=0;idx<AFFIRMATION_GALLERY.length;idx++)
        {
        const affirmationsData =AFFIRMATION_GALLERY[idx].data;
        const affirmationStart = affirmationsData.find((a) => a.id === Number(itemId));
        
        if(affirmationStart){ 
            setAffirmation(affirmationStart); 
            const affirmationsArray = affirmationStart.text.split(".");
           
            if(affirmationsArray[affirmationsArray.length-1] === ''){ //-1 yani bir azı değer döndürmek zorundayız.
                affirmationsArray.pop();
            }

            setSentences(affirmationsArray);

            return;} 
    }
}, [])

  return (
    <View style={styles.flat}>
      <ImageBackground source={affirmation?.image} resizeMode='cover' style={styles.flat}>
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>

            <Pressable onPress={() => router.back()} style={{flex:1, paddingRight:"80%"}}>
            <FontAwesome5 name="arrow-circle-left" size={50} color="white" />
            </Pressable>

            <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                <View style={{height:"100%",justifyContent:"center"}}>
                    
                    <View style={{height:"100%", justifyContent:"center"}}>
                    {sentences.map((sentence,idx) =>(
                         <Text style={{color:"white",fontWeight:"bold",fontSize:20, textAlign:"center"}}
                               key={idx}>
                            {sentence}.
                        </Text>
                    ))}

                    </View>
                </View>
            </ScrollView>

        </AppGradient>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

    flat:{flex:1}
   });

export default AffirmationsPractice;
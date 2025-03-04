import { View, Text, FlatList, StyleSheet, Pressable,Image } from 'react-native';
import React from 'react';
import { GalleryPreviewData } from '../constants/models/AffirmationCategory';
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps{
    title:string;
    previews:GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({title,previews}: GuidedAffirmationsGalleryProps) => {
  return (
    <View style={{flex:1}}>
        <View style={{flex:1}}>
            <Text style={{fontWeight:"bold",color:"white",fontSize:20,paddingTop:"5%"}}>
                {title}
            </Text>
        </View>

        <View style={styles.flat}>
            <FlatList data={previews}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({item, index}) => (
                      <Link href={`./affirmations/${item.id}`} asChild>
                        <Pressable>
                            <View style={styles.imageviewer}>
                                
                                <Image source={item.image} resizeMode="cover" 
                                 style={{flex:1, overflow:"hidden",borderRadius: 30,
                                        height:250,width:250, padding:10}}/>

                            </View>
                        </Pressable>
                      </Link>
                      )} 
                      horizontal/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({

   flat:{flex:1,justifyContent:"space-between",},
   imageviewer:{flex:1,overflow:"hidden",borderRadius: 20,}
  });

export default GuidedAffirmationsGallery;
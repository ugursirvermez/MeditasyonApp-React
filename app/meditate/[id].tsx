import { View, Text, ImageBackground, Pressable } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import meditationImages from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {router, useLocalSearchParams} from 'expo-router';
import CustomButton from '@/components/CustomButton';
import {Audio} from 'expo-av';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/MeditationData';
import { TimerContext } from '@/context/TimerContext';

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const{ duration:secondRemaining, setDuration:setsecondRemaining} = useContext(TimerContext);

  //const [secondRemaining, setsecondRemaining] = useState(10);
  const [isMeditating, setMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    //Bitme koşulu
    if(secondRemaining === 0){ setMeditating(false); return;}

    if(isMeditating){
    //Sürenin azalması
    timerId =setTimeout(() => {
      setsecondRemaining(secondRemaining -1);
    }, 1000);
  }

    return() => {
      clearTimeout(timerId);
    };

  }, [secondRemaining, isMeditating]);

  useEffect(() => {
    return () =>{
      audioSound?.unloadAsync();
    }
  }, [audioSound]);

  const toggleMeditationSessionStatus = async() => {
    if(secondRemaining === 0) setsecondRemaining(10);

    setMeditating(!isMeditating);

    await toogleSound();
  }

  const toogleSound = async () =>{
    const sound = audioSound ? audioSound : await initializeSound();
    const status = await sound?.getStatusAsync();

    if(status?.isLoaded && !isPlayingAudio){
      await sound.playAsync();
      setPlayingAudio(true);
    }
    else{
      await sound.pauseAsync();
      setPlayingAudio(false);
    }

  }

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id)-1].audio;
    const {sound} = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    setSound(sound);
    return sound;
  }

  const handleAdjustDuration =() => {
    if(isMeditating) toggleMeditationSessionStatus();

    router.push("/(modal)/adjust-meditation-duration");
  }

  //Zamanı dakikaya dönüştürme
  const formattedTimeMinutes = String(Math.floor(secondRemaining/60)).padStart(2,"0");

  const formattedTimeSeconds = String(secondRemaining % 60).padStart(2,"0");

  return (
    <View style={{flex:1}}>
      <ImageBackground source={meditationImages[Number(id)-1]} resizeMode='cover' style={{flex:1}}>

      <AppGradient colors={["transparent","rgba(0,0,0,0.8"]}>
      <Pressable onPress={() => router.back()} style={{flex:1, paddingRight:"80%"}}>
            <FontAwesome5 name="arrow-circle-left" size={50} color="white" />
            </Pressable>  

      <View style={{flex:6, justifyContent:"center"}}> 
        <View style={{margin:"auto", overflow:"hidden",borderRadius: 90, alignItems:"center",
                      justifyContent:"center", backgroundColor:"white", width:"40%",height:"25%"
        }}>
          <Text style={{fontWeight:"bold",fontSize:20,color:"blue"}}>
            {formattedTimeMinutes}:{formattedTimeSeconds}
            </Text>
        </View>
      </View>
      
      <View style={{flex:1, backgroundColor:"white",justifyContent:"center",
                    overflow:"hidden",borderRadius: 50, alignItems:"center", margin:"2%" }}>
        <CustomButton title="Adjust Duration" onPress={handleAdjustDuration}/>
      </View>
      <View style={{flex:1, backgroundColor:"white",justifyContent:"center",
                    overflow:"hidden",borderRadius: 50, alignItems:"center", }}>
        <CustomButton title={isMeditating ? "Stop":"Start Meditation"} onPress={toggleMeditationSessionStatus}/>
      </View>
      </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate;
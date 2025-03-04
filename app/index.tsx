//Sayfayı tekrar baştan yazdık. Oldpage.tsx'te notlar var.
import { View,StyleSheet, Text, ImageBackground, StatusBar} from "react-native";
import React from "react";
//Arkaplan resmi sayfaya import ediyoruz.
import BeachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
 return(
      <View className="flex-1">
        <ImageBackground 
        source={BeachImage} 
        resizeMode="cover" 
        className="flex-1"
        style={{height:'100%', width:'100%', backgroundColor:'rgba(0,0,0,0.8)'}}>

        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]} >
          <SafeAreaView>
          <View style={{height:'50%', width:'100%'}}>
          <Text style={styles.headline}>
            MyMeditation
          </Text>
          <Text style={{textAlign:"center", fontSize:20, color:"white"}}>
          Meditation For Everyone!
          </Text>
          </View>
          <View style={styles.buttonstyle}>
            <CustomButton onPress={() => router.push('/nature-meditate')}
            title="Let's Start"/>
          </View>

          <StatusBar barStyle={'default'}/>
          
          </SafeAreaView>
        </AppGradient>
        </ImageBackground>
      </View>
 
 );
};

const styles = StyleSheet.create({

   headline:{flex:1, fontWeight: 'bold', fontSize:25, color:"white",
   justifyContent:"center",textAlign: 'center', alignItems:"center"},
   
   buttonstyle:{color:"black", backgroundColor: 'white',
   height:'30%', width:'100%',
   position: 'absolute', //Here is the trick
   bottom:-100, //Here is the trick
   justifyContent:"center",textAlign: 'center', alignItems:"center", borderRadius: 35}
 
 });
export default App; //Bunu koymazsak Expo bizim sayfamızı görmüyor...
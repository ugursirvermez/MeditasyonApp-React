//NOT: npx expo start çalıştırmadan önce cd komutu ile package.json dosyasının olduğu 
// klasöre girmeniz gerekir. Yoksa Expo uygulamasını görebilirsiniz
//npx expo start --clear ile program başlatılıyor.
import { Image, StyleSheet,View,Text } from 'react-native';
//1- View ve Text aşağıya eklediğimde Yukarıda import etmem gerekiyor!

//2- Burada yazdığım görsel olarak çalıştıracağım her şeyi aşağıda styles
//   içerisinde tasarımını belirtmem lazım.
//4- Contants klasöründekiler kopyala+yapıştır ile alındı. Bunlar sabitler oluyor.
// Assets'te eklenen bütün nesnelerin verilerinin yazılı olduğu .ts dosyaları var.
// 5- NativeWind yükledik. CSS ile iyi bir tasarım yapmayı sağlıyor. UX işi.
// NativeWind yüklemek için -> npm install nativewind
// Bir de tailwind var. O da aynı şekilde CSS'te kullanılıyor.
// Tailwind yüklemek için -> npm install --save-dev tailwindcss
export default function HomeScreen() {
  return (
    //React Native İlk Yazı Dakika 13:36
    //<View style={styles.container}>
      //<Text> Hello World!</Text> 
    //</View>
    <View className="flex-1 justify-center items-center"> //21:15
    <Text> Hello World!</Text> 
  </View>
  );
}

const styles = StyleSheet.create({
 //3- Yukarıda Hello World yazısını container tasarımında çağırdım.
  container:{flex:1, justifyContent: 'center', alignItems: 'center'},

});

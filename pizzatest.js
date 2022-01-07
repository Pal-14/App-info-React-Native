import React, { useState } from "react";
import { Text, TextInput, View, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PizzaTranslator = () => {
  const [text, setText] = useState("");
  return (
    <View></View>

    

    /* LIEN VERS UN SITE */
    /*  <TouchableOpacity onPress={() => Linking.openURL("http://google.com")}>
        <Text style={{ color: "blue" }}>Google</Text>
      </TouchableOpacity> */

    /* <View style={{padding: 10}}>



const [currentWeather, setCurrentWeather] = useState(null)

useEffect(() => {
  const currentW = data.list.filter(forecast => {
    const today = new Date().getTime ()+ Math.abs(data.city.timezone * 1000)
    const foreCastDate = new Date(forecast.dt *1000)
    return isSameDay(today, foreCastDate)
  })
  setCurrentWeather(currentW[0])

},[data])
    



        <TextInput
          style={{height: 40}}
          secureTextEntry={true}
          textContentType="password"
          placeholder="Type here to translate!"
          onChangeText={text => setText(text)}
          defaultValue={text.split('').map((word) => word && '*').join(' ')}
        />
        
      </View> */
  );
};

export default PizzaTranslator;

import React, { useState } from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const STYLES = ["default", "dark-content", "light-content"];
const TRANSITIONS = ["fade", "slide", "none"];

export default function Page2  ()  {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#AEB7B3"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      
    
      

      <View style={styles.buttonsContainer}>
        <View style={{ margin: 10 }}>
        <Button
          color="#AEB7B3"
          title="Visibility StatusBar"
          onPress={changeStatusBarVisibility}
        /></View>

        <View style={{ margin: 10 }}>
          <Button
            color="#AFBFC0"
            title="StatusBar Icons Style"
            onPress={changeStatusBarStyle}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#3D5A6C",
    
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    marginBottom: 15,
  },
});

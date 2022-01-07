import React, { useEffect, useState } from "react";
import {StyleSheet,Text,View,Image,Button,Alert,TextInput,} from "react-native";


export default function HomePage() {
  return (
    <View style={style.containerLog}>

      <View style={style.containerTitre}>
        <Text style={style.h1}> live information</Text>
      </View>

      <View style={style.logo}>
        <Image source={require("../../src/logoInfo.jpg")} style={style.logo} />
      </View>
     
    </View>
  );
}

const style = StyleSheet.create({
  containerLog: {
    flex: 1,
    alignContent: "center",
    width:"100%",
    paddingHorizontal:5 ,
    marginTop:30   
  },
  containerTitre:{
    flex:0.5,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  h1:{
    textTransform:"uppercase",
    flex:0.5,
    fontSize:30,
    fontWeight:"bold",
  },

  logo:{
    flex:3,
    width:"100%",
    height:300,
    marginBottom:20,
    borderRadius:20
  },
});

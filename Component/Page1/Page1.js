import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";

import { getDataApi } from "../Outil/Fonction";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Page1() {
  const [dataApi, setDataApi] = useState();

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getDataApi(setDataApi);
  }, [dataApi === undefined]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      horizontal={false}
      style={style.ScrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={style.titleView}>
        {/* Vue titre */}
        {/* Titre de la page */}
        <Text style={style.titleh1}>Live information</Text>
      </View>

      {dataApi?.articles?.map((article, id) => (
        <View style={style.articlesView}>
          <View>
            <View id={id} style={style.articlesView}>
              <View>
                <View>
                  <Text style={style.titleh2}>{article.title}</Text>

                  <Image
                    style={style.tinyLogo}
                    source={{ uri: `${article.urlToImage}` }}
                  />

                  <Text style={style.descriptionArticle}>
                    {article.description}

                    <Text
                      style={style.linkArticle}
                      onPress={() => Linking.openURL(`${article.url}`)}
                    >
                      Link to full article
                    </Text>
                  </Text>

                  <Text style={style.source}>
                    Source :<Text>{article.id}</Text>
                  </Text>

                  <Text style={style.authorArticle}>
                    By :<Text>{article.author}</Text>
                  </Text>

                  <Text style={style.published}>{article.publishedAt}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}

      <View style={style.footer}>
        <Text style={style.txtFooter}>
          &copy;PAL-14 For the <Text style={style.span}>"Bocal Académy"</Text>
          <Text>
            <Image
              style={style.fav}
              source={require("../../assets/favFace.png")}
            />
          </Text>
          <Text>
            <Image
              style={style.fav}
              source={require("../../assets/favTwitt.png")}
            />
          </Text>
          <Text>
            <Image
              style={style.fav}
              source={require("../../assets/favInsta.png")}
            />
          </Text>
          <Text>
            <Image
              style={style.fav}
              source={require("../../assets/favSnap.png")}
            />
          </Text>
        </Text>
      </View>

      <View>
        <Text style={style.thanks}>Thank you for the package</Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  ScrollView: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  titleView: {
    flex: 1,
    height: 100,
  },
  titleh1: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  titleh2: {
    marginTop: 10,
    justifyContent: "center",
    marginLeft: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    width: "98%",
    fontSize: 15,
  },
  tinyLogo: {
    flex: 1,
    width: "100%",
    height: 300,
    marginTop: 30,
    borderRadius: 10,
  },
  articlesView: {
    flex: 1,
    flexDirection: "column",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  descriptionArticle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    width: "100%",
    fontStyle: "italic",
  },
  linkArticle: {
    color: "blue",
    fontStyle: "italic",
  },

  source: {
    textDecorationLine: "underline",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
    textTransform: "capitalize",
  },
  authorArticle: { marginTop: 10, marginLeft: 20, marginRight: 10 },
  published: {
    flexDirection: "column",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
  },
  buttonText: {},
  button: {
    alignItems: "center",
    backgroundColor: "lightgrey",
    padding: 10,
    width: "auto",
    height: 30,
    marginBottom: 20,
  },
  footer: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  txtFooter: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 5,
    height: 30,
    width: "100%",
    paddingHorizontal: 10,
    textAlign: "center",
  },
  thanks: {
    textAlign: "center",
    marginBottom: 20,
  },
  span: {
    fontStyle: "italic",
  },
  fav: {
    height: 20,
    width: 20,
  },
});

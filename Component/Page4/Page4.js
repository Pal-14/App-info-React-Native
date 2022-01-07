import React, { useState , useEffect} from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { getDataApi } from '../Outil/Fonction';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default Page4 = () => {
  
  
  const [dataApi, setDataApi] =  React.useState(false);

  const onRefresh = React.useCallback(() => {
    setDataApi(true);
    wait(2000).then(() => setDataApi(false));
  }, []);



  useEffect(() => {
    getDataApi(setDataApi);
  }, [dataApi === undefined]);
  return (
    <SafeAreaView style={style.safeView} >
      <ScrollView
        contentContainerStyle={style.ScrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      > 




<View style={style.titleView}>
        {/* Vue titre */}
        {/* Titre de la page */}
        <Text style={style.titleh1}>L'info en direct</Text>
      </View>

      {/* *************************************************************************************************************************************************** */}
      {/* Vue avec 1 er article */}

      <View style={style.articlesView}>
        <View>
          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[0]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[0]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[0]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[0]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[0]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[0]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[0]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 2 eme article */}
          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[1]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[1]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[1]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[1]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[1]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[1]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[1]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 3 eme article */}
          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[2]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[2]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[2]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[2]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[2]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[2]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[2]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 4 eme article */}
          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[3]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[3]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[3]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[3]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[3]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[3]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[3]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 5 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[4]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[4]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[4]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[4]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[4]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[4]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[4]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 6 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[5]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[5]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[5]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[5]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[5]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[5]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[5]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 7 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[6]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[6]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[6]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[6]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[6]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[6]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[6]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 8 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[7]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[7]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[7]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[7]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[7]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[7]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[7]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 9 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[8]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[8]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[8]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[8]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[8]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[8]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[8]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 10 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>{dataApi?.articles[9]?.title}</Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[9]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[9]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[9]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[9]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[9]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[9]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 11 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[10]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[10]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[10]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[10]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[10]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[10]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[10]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 12 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[11]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[11]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[11]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[11]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[11]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[11]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[11]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>

          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 13 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[12]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[12]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[12]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[12]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[12]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[12]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[12]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 14 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[13]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[13]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[13]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[13]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[13]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[13]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[13]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 15 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[14]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[14]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[14]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[14]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[14]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[14]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[14]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 16 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[15]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[15]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[15]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[15]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[15]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[15]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[15]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 17 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[16]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[16]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[16]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[16]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[16]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[16]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[16]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 16 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[17]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[17]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[17]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[17]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[17]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[17]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[17]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 18 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[17]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[17]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[17]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[17]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[17]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[17]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[17]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
          {/* *************************************************************************************************************************************************** */}
          {/* Vue avec 17 eme article */}

          <View style={style.articlesView}>
            <View>
              <View>
                {/* Titre 2*/}
                <Text style={style.titleh2}>
                  {dataApi?.articles[18]?.title}
                </Text>
                {/* Image */}
                <Image
                  style={style.tinyLogo}
                  source={{ uri: `${dataApi?.articles[18]?.urlToImage}` }}
                />
                {/* Article */}
                <Text style={style.descriptionArticle}>
                  {dataApi?.articles[18]?.description}
                  {/* Url de l'article complet */}
                  <Text
                    style={style.linkArticle}
                    onPress={() =>
                      Linking.openURL(`${dataApi?.articles[18]?.url}`)
                    }
                  >
                    Link to full article
                  </Text>
                </Text>

                {/* Source de l'article */}

                <Text style={style.source}>
                  Source :<Text>{dataApi?.articles[18]?.source?.id}</Text>
                </Text>
                {/* Auteur de l'article */}
                <Text style={style.authorArticle}>
                  By :<Text>{dataApi?.articles[18]?.author}</Text>
                </Text>
                {/* Date de publication */}
                <Text style={style.published}>
                  {dataApi?.articles[18]?.publishedAt}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={style.footer}>
        <Text style={style.txtFooter}>
          &copy;PAL-14 For the <Text style={style.span}>"Bocal Académy"</Text> 
          
        <Text><Image style={style.fav}source={require("../../assets/favFace.png")}/></Text>
        <Text><Image style={style.fav}source={require("../../assets/favTwitt.png")}/></Text>
        <Text><Image style={style.fav}source={require("../../assets/favInsta.png")}/></Text>
        <Text><Image style={style.fav}source={require("../../assets/favSnap.png")}/></Text>
        <Text>Thank you for the package</Text>
        </Text>
      </View>

    </ScrollView></SafeAreaView>
  );
}

const style = StyleSheet.create({
    safeView:{paddingHorizontal:20},
  ScrollView: {
    paddingHorizontal: 20,
    marginTop:50
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
    width: 300,
    fontSize: 20,
  },
  tinyLogo: {
    flex: 1,
    width: 350,
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
    width: 300,
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
  footer: {
    flexDirection: "column",
    alignContent:"center",
    alignItems:"center",
    textAlign:"center"
  },
  txtFooter: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 5,
    height: 100,
    width: "100%",
    paddingHorizontal:10
  },
  span: {
    fontStyle: "italic",
  },
  fav: {
    height: 20,
    width: 20,
  },
});

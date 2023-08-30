import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView>
      <Image
        source={{ uri: article.urlToImage }}
        style={{ width: '100%', height: 200 }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          {article.title}
        </Text>
        <Text style={{ marginTop: 10 }}>{article.publishedAt}</Text>
        <Text style={{ marginTop: 10 }}>{article.author}</Text>
        <Text style={{ marginTop: 20 }}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

export default ArticleDetailScreen;

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: article.urlToImage }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.author}>By {article.author}</Text>
        <Text style={styles.publishedAt}>{article.publishedAt}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    color: 'gray',
    marginBottom: 5,
  },
  publishedAt: {
    color: 'gray',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ArticleDetailScreen;

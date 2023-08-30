import React from 'react';
import { ScrollView, Image, Text, StyleSheet } from 'react-native';

const ArticleDetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>By {article.author}</Text>
      <Text style={styles.publishedAt}>{article.publishedAt}</Text>
      <Text style={styles.content}>{article.content}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  author: {
    color: 'gray',
    paddingHorizontal: 20,
  },
  publishedAt: {
    color: 'gray',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});

export default ArticleDetailScreen;

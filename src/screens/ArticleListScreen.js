import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import NewsAPI from '../services/NewsAPI';
import ArticleListItem from '../components/ArticleListItem';

const ArticleListScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await NewsAPI.getTopHeadlines(category);
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, [category]);

  const navigateToArticleDetail = (article) => {
    navigation.navigate('ArticleDetail', { article });
  };

  return (
    <View>
      <Text>Articles in {category}</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <ArticleListItem article={item} onPress={navigateToArticleDetail} />
        )}
      />
    </View>
  );
};

export default ArticleListScreen;

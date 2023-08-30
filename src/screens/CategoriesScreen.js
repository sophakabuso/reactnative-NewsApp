import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = ({ navigation }) => {
  const categories = ['Business', 'Technology', 'Sports', 'Entertainment'];

  const navigateToArticleList = (category) => {
    navigation.navigate('ArticleList', { category });
  };

  return (
    <View>
      <Text>Choose a Category</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryItem category={item} onPress={navigateToArticleList} />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

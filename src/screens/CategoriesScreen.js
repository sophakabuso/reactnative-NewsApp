import React from 'react';
import { View, Text, Button } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  const categories = ['Business', 'Technology', 'Sports', 'Entertainment'];

  const navigateToArticleList = (category) => {
    navigation.navigate('ArticleList', { category });
  };

  return (
    <View>
      <Text>Choose a Category</Text>
      {categories.map((category, index) => (
        <Button
          key={index}
          title={category}
          onPress={() => navigateToArticleList(category.toLowerCase())}
        />
      ))}
    </View>
  );
};

export default CategoriesScreen;

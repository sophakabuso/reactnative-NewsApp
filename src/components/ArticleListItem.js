import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ArticleListItem = ({ article }) => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={{ uri: article.urlToImage }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{article.title}</Text>
        <Text>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleListItem;

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = ({ navigation }) => {
  const categories = ['Business', 'Technology', 'Sports', 'Entertainment'];

  const navigateToArticleList = (category) => {
    navigation.navigate('ArticleList', { category });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
        <Text style={styles.headerText}>SoB prime News</Text>
      </View>
      <View style={styles.categoryListContainer}>
        <Text style={styles.categoryHeaderText}>CATEGORIES</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryItem category={item} onPress={navigateToArticleList} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 18,
    color: '#gold',
  },
  categoryListContainer: {
    flex: 1,
  },
  categoryHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default CategoriesScreen;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ category, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(category.toLowerCase())}
    >
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryItem;

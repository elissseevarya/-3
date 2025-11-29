import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function NewsListScreen({ navigation }) {
  const news = [
    { id: '1', title: 'React Native 0.74 выпущен', content: 'Новая версия ускоряет работу JS движка.' },
    { id: '2', title: 'Expo SDK 52', content: 'Добавлены улучшения для навигации и UI.' },
    { id: '3', title: 'AI в мобильной разработке', content: 'Нейросети помогают создавать приложения.' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('NewsDetail', { id: item.id, title: item.title, content: item.content })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
  title: { fontSize: 16, fontWeight: '600' },
});

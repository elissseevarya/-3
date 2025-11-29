import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewsDetailScreen({ route }) {
  const { id, title, content } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.info}>ID статьи: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  content: { fontSize: 16, marginBottom: 16 },
  info: { fontSize: 14, color: 'gray' },
});

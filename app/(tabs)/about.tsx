import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {


  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.title}>About</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Welcome to My App</Text>
        <Text style={styles.paragraph}>
          My App is designed to help you manage your tasks efficiently and stay organized. Whether it's managing daily tasks, shopping lists, or important projects, we strive to provide the best experience for our users.
        </Text>
        <Text style={styles.heading}>Features</Text>
        <Text style={styles.paragraph}>
          - Task management with due dates{'\n'}
          - Search and filter functionality{'\n'}
          - Customizable task lists and more!
        </Text>
        <Text style={styles.heading}>Contact Us</Text>
        <Text style={styles.paragraph}>
          Have any questions or feedback? Feel free to reach out to us at support@myapp.com. We appreciate your input and are constantly working to improve your experience.
        </Text>
        <Text style={styles.footer}>© {new Date().getFullYear()} My App. All rights reserved.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 30
  },
  contentContainer: {
    paddingVertical: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 22,
  },
  footer: {
    marginTop: 16,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

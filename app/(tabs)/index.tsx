import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { IconButton, Checkbox } from 'react-native-paper'; // Or any icon/checkbox library
import { router, useNavigation } from 'expo-router';

const tasks = [
  { id: 1, name: 'Complete project proposal', dueDate: 'May 15, 2025', completed: false },
  { id: 2, name: 'Buy groceries', dueDate: 'May 10, 2025', completed: false },
  { id: 3, name: 'Schedule dentist appointment', dueDate: 'May 20, 2025', completed: false },
];

export default function TaskList() {

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Tasks</Text>
        <IconButton icon="magnify" onPress={() => { /* Handle search */ }} />
      </View>
      
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
            <Checkbox
              status={item.completed ? 'checked' : 'unchecked'}
              onPress={() => {  }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text style={{ color: 'gray' }}>Due: {item.dueDate}</Text>
            </View>
            <IconButton icon="dots-vertical" onPress={() => {  }} />
          </View>
        )}
      />

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          backgroundColor: '#000',
          borderRadius: 50,
          padding: 16,
        }}
        onPress={() => router.push('/add_task')}
      >
        <Text style={{ color: '#fff', fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

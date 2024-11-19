import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Link } from 'expo-router';

export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type RootStackParamList = {
  Home: undefined;
  TaskForm: { task?: Task };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Первая задача', description: 'Описание первой задачи', completed: false },
    { id: 2, title: 'Вторая задача', description: 'Описание второй задачи', completed: true },
  ]);

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TaskForm', { task: item })}>
      <View style={{ padding: 10, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.completed ? 'Выполнено' : 'Не выполнено'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
      
    </View>
  );
}

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type RootStackParamList = {
  Home: undefined;
  TaskForm: { task?: Task };
};

type TaskFormScreenRouteProp = RouteProp<RootStackParamList, 'TaskForm'>;
type TaskFormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TaskForm'>;

type Props = {
  route: TaskFormScreenRouteProp;
  navigation: TaskFormScreenNavigationProp;
};

export default function TaskFormScreen({ route, navigation }: Props) {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  const handleSave = () => {
    Alert.alert('Успех', 'Задача сохранена (моковые данные)');
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Название"
        value={title}
        onChangeText={setTitle}
        style={{ borderBottomWidth: 1, marginBottom: 10, fontSize: 16 }}
      />
      <TextInput
        placeholder="Описание"
        value={description}
        onChangeText={setDescription}
        style={{ borderBottomWidth: 1, marginBottom: 10, fontSize: 16 }}
      />
      <Button title="Сохранить" onPress={handleSave} />
    </View>
  );
}

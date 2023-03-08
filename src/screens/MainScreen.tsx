import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from '../../components/Task';
import useTaskStore from '../store/taskStore';

const MainScreen = () => {
  const addTask = useTaskStore(state => state.addTask);

  const [taskTitle, setTaskTitle] = useState('');

  const { tasks, removeTask } = useTaskStore(state => ({
    tasks: state.tasks,
    removeTask: state.removeTask,
  }));

  const handleTaskSubmit = () => {
    if (!taskTitle) return Alert.alert('please add task');
    addTask({
      id: Math.ceil(Math.random() * 1000),
      title: taskTitle,
    });
    setTaskTitle('');
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Today's Task</Text>
        <View style={styles.items}>
          {tasks.map((task, id) => {
            return (
              <TouchableOpacity
                key={id}
                onPress={() => {
                  removeTask(task.id);
                }}
              >
                <Task kata={task.title} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputTextContainer}
      >
        <TextInput
          placeholder='Input your task'
          style={styles.inputText}
          value={taskTitle}
          onChangeText={text => setTaskTitle(text)}
        />
        <TouchableOpacity onPress={() => handleTaskSubmit()}>
          <View style={styles.addContainer}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  container: {
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
  },
  items: {
    marginTop: 30,
  },
  inputTextContainer: {
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  inputText: {
    backgroundColor: 'white',
    width: 250,
    padding: 15,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  addContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 24,
  },
});

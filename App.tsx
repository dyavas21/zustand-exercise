import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import useUsers from './src/store/Users';

export default function App() {
  const { users, execute } = useUsers(state => state);

  const teken = () => {
    execute('https://jsonplaceholder.typicode.com/todos');
  };
  return (
    <View style={styles.container}>
      <Button title='API' onPress={teken} />
      {console.log('index', users)}
      <FlatList
        data={users}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

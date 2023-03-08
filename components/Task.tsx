import { StyleSheet, Text, View } from 'react-native';
import useTaskStore from '../src/store/taskStore';

const Task = ({ kata }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <View style={styles.box}></View>
        <Text>{kata}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  box: {
    width: 24,
    height: 24,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 6,
  },
});

import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useUserStore } from '../store/userStore';
import UserContainer from '../../components/UserContainer';

const HomeScreen = () => {
  const allUsers = useUserStore(state => state.userData);
  const getUserAPICall = useUserStore(state => state.getUsersAPI);

  useEffect(() => {
    getUserAPICall();
  }, []);

  return (
    <View style={styles.root}>
      {allUsers.map(user => {
        return (
          <UserContainer
            key={user.id}
            name={user.name}
            userName={user.username}
            email={user.email}
          />
        );
      })}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    padding: 30,
  },
  containerProfile: {
    height: 100,
    backgroundColor: 'grey',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
});

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const UserContainer = ({ name, userName, email, key }) => {
  return (
    <View style={styles.containerProfile} key={key}>
      <View>
        <Text>{name}</Text>
        <Text>{userName}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
};

export default UserContainer;

const styles = StyleSheet.create({
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

{
  /* {allUsers.map(user => {
   
      })} */
}

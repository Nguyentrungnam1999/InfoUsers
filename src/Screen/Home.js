import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListUser } from '../feature/reducerslice';

const Home = () => {
  const user = useSelector(state => state.rootReducer.users.listUser);
  const dispatch = useDispatch(getListUser());
  useEffect(() => {
    dispatch;
  }, []);
  // console.log(user);
  return (
    <View>
      {user.map(item => {
        return (
          <View
            style={{
              marginTop: 10,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              marginHorizontal: 5,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

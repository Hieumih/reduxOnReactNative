import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigations/index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './src/store/todosSlice';
import authReducer from './src/store/authSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer
  }
})


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

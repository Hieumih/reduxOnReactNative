import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SimpleView from './src/navigations/SimpleView';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './src/store/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})


export default function App() {
  return (
    <Provider store={store}>
          <SimpleView />
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

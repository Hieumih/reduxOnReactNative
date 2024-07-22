
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Todo from '../components/Todo';

import { useSelector, useDispatch } from 'react-redux';

import todosReducer, { toggleTodo, addTodo, removeTodo } from '../store/todosSlice';
import authReducer, { login, logout } from '../store/authSlice';

import { useState } from 'react';

const SimpleView = ({navigation}) => {
    const [text, setText] = useState('')

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const addTodoFunc = () => {
        dispatch(addTodo({
            text: text,
            completed: false
        }))
        setText('')
    }

    return (
        <View>
            <View>
                <TextInput style={styles.ipt} placeholder='add todo ' value={text} onChangeText={
                    (text) => setText(text)
                } />
                <Button title='add todo'
                    onPress={addTodoFunc}>

                </Button>
                <View>
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            text={todo.text}
                            completed={todo.completed}
                            removeFunc={() => {
                                dispatch(removeTodo(index))
                            }}
                            toggleTodo={() => {
                                dispatch(toggleTodo(index))
                            }}
                        />
                    ))}
                </View>
            </View>
            <View>
                <Button title='Logout' onPress={() => {
                    dispatch(logout())
                    navigation.navigate('Auth')
                }}></Button>
            </View>

        </View>
    );
}


export default SimpleView;


const styles = StyleSheet.create({
    ipt: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        padding: 10,
    }
})
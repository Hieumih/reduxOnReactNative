
import { View, TextInput, Button } from 'react-native';
import Todo from '../components/Todo';

import { useSelector, useDispatch } from 'react-redux';

import todosReducer, { toggleTodo, addTodo, removeTodo } from '../store/todosSlice';

import { useState } from 'react';

const SimpleView = () => {
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
            <TextInput placeholder='add todo ' value={text} onChangeText={
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
    );
}


export default SimpleView;
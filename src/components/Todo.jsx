import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'


const Todo = ({ text, completed = false, removeFunc = null, toggleTodo = null }) => {
    let new_style = StyleSheet.create({
        text: {
            fontSize: 20,
            textDecorationLine: completed ? 'line-through' : 'none'
        }
    })

    const textStyle = StyleSheet.flatten([styles.text, new_style.text])

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleTodo}>
                <Text style={textStyle}>{text}</Text>
            </Pressable>
            <Pressable onPress={removeFunc} >
                <Ionicons name="trash" size={32} color="black" />
            </Pressable>
        </View>
    );
}


export default Todo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'center',
        maxWidth: '100%'
    },
    text: {
        fontSize: 20,
        // select
        userSelect: 'none'
    }
})
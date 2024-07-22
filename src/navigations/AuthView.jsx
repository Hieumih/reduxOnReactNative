import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import authReducer, { login, logout } from '../store/authSlice';


const AuthView = ({navigation}) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch()
    

    return (
        <View style={styles.container}>
            <Text style={styles.h2}>Sign in</Text>
            <TextInput placeholder='username' style={styles.input} value={user} onChange={(e) => setUser(e.target.value)} />
            <TextInput placeholder='password' style={styles.input} value={pass} onChange={(e) => setPass(e.target.value)} secureTextEntry/>
            <Button title='login' onPress={() => {
                dispatch(login({ user, pass }))
                setUser('')
                setPass('')
                navigation.navigate('Home')
            }} />
        </View>
    );
}


export default AuthView;


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        // margin: 10
        marginBottom: 10,
        padding: 10,
    },
    h2: {
        fontSize: 20,
        marginBottom: 10
    }

})
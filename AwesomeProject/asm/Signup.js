import { StyleSheet, Text, TextInput, View, Checkbox, Pressable, Image, ToastAndroid,Button  } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import AxiosIntance from './ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



const Signup = (props) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    // const { setShowRegister } = props;
    const onRegister = async () => {
        let data = { email, password, name, confirm_password }
        const doFetch = async (data) => {
            //172.16.75.183
            //192.168.1.7
            let url = 'http://172.16.75.183:3000/api/User/signup'
            const response = await fetch(url, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify(data), 
            });
            return response.json(); 
        }
        const res = await doFetch(data);
        console.log(res);
    

    }
    return (
        <View style={styles.Container}>



            <View>

                <Text style={styles.Again}>Hello!</Text>
                <Text style={styles.Welcome}>Signup to get Started</Text>

            </View>
            <View style={styles.ViewUsername}>
                <Text style={styles.TextUsernamePW}>Username</Text>
                <Text style={styles.Daunhan}>*</Text>

            </View>
            <View>
                <TextInput style={styles.input} onChangeText={setEmail} />
            </View>
           
            <View style={styles.ViewPassword}>
                <Text style={styles.TextUsernamePW}>Password</Text>
                <Text style={styles.Daunhan}>*</Text>
            </View>
            <View>
                <TextInput style={styles.input} onChangeText={setPassword} />
            </View>
            <View style={styles.ViewPassword}>
                <Text style={styles.TextUsernamePW}>Confirm password</Text>
                <Text style={styles.Daunhan}>*</Text>
            </View>
            <View>
                <TextInput style={styles.input} onChangeText={setConfirmPassword} />
            </View>
            
            <View style={styles.ViewPassword}>
                <Text style={styles.TextUsernamePW}>Name</Text>
                <Text style={styles.Daunhan}>*</Text>
            </View>
            <View>
                <TextInput style={styles.input} onChangeText={setName} />
            </View>

            <View style={styles.ViewRememberme}>
                <View style={styles.ViewRememberme2}>
                    <CheckBox
                        disabled={false}
                        tintColors={{ true: '#1877F2' }}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={[styles.Forgotthepassword, { color: 'rgba(78, 75, 102, 1)' }, { marginTop: 0 }]}>Remember me</Text>
                </View>

                <View style={styles.ViewForgotpassword}>

                    <Text style={styles.Forgotthepassword}>Forgot the password ?</Text>

                </View>
            </View>
            <Pressable style={styles.Buttonlogin} onPress={onRegister}>
                <Text style={styles.TextLogin}>Sign up</Text>
            </Pressable>
            <Text style={styles.Textorcontinue}>Or continue with</Text>

            <View style={styles.ViewFacebookGoogle}>
                <Pressable style={styles.ButtonFacebook}>
                    <Image style={styles.ImageFacebook} source={require('../image/Icon.png')}></Image>
                    <Text style={styles.TextFacebook}>Facebook</Text>
                </Pressable>
                <Pressable style={styles.ButtonFacebook}>
                    <Image style={styles.ImageFacebook} source={require('../image/Icon2.png')}></Image>
                    <Text style={styles.TextFacebook}>Google</Text>
                </Pressable>
            </View>
            <Pressable >
                <View style={styles.ViewAlreadyhaveanaccount}>
                    <Text style={styles.Textdonthaveanaccount}>Already have an account ?</Text>
                    <Text style={styles.TextSmallLogin}>Login</Text>
                </View>
            </Pressable>


        </View>
    )
}

export default Signup
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 24,
    },
    Hello: {
        color: 'black',
        fontSize: 48,
        letterSpacing: 0.12,
        lineHeight: 72,
        fontWeight: 'bold',
        fontFamily: 'Poppins'

    },

    Again: {
        color: 'rgba(24, 119, 242, 1)',
        fontSize: 48,
        letterSpacing: 0.12,
        lineHeight: 72,
        fontWeight: 'bold',
        fontFamily: 'Poppins'

    },
    Welcome: {
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.12
    },
    ViewUsername: {
        flexDirection: 'row',
        marginTop: 48,
    },
    Daunhan: {
        color: 'red'
    },
    input: {
        height: 48,
        borderWidth: 2,
        padding: 10,
        borderRadius: 6,
        gap: 10,
        borderColor: 'rgba(78, 75, 102, 1)'


    },
    ViewPassword: {
        flexDirection: 'row',
        marginTop: 16
    },
    Forgotthepassword: {
        color: 'rgba(88, 144, 255, 1)',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        fontWeight: '400',
        marginTop: 4

    },
    ViewRememberme: {
        marginTop: 9.5,
        flexDirection: 'row',
        justifyContent: 'space-between'


    },
    ViewForgotpassword: {
        alignItems: 'center'
    },
    Buttonlogin: {
        borderRadius: 10,
        height: 50,
        backgroundColor: 'rgba(24, 119, 242, 1)',
        paddingVertical: 10,
        alignItems: 'center'

    },
    TextLogin: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        fontWeight: '600',
        fontFamily: 'Poppins'

    },
    Textorcontinue: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.12,
    },
    ImageFacebook: {
        width: 24,
        height: 25
    },
    ButtonFacebook: {
        flexDirection: 'row',
        gap: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(238, 241, 244, 1)',
        width: 174,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        Padding: 12,



    },
    TextFacebook: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        fontWeight: '600',
        fontFamily: 'Poppins',
        color: 'rgba(102, 112, 128, 1)',
        marginLeft: 10,
    },
    ViewRememberme2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ViewFacebookGoogle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Textdonthaveanaccount: {
        fontFamily: 'Poppins',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.12,
        color: 'rgba(78, 75, 102, 1)'
    },
    ViewAlreadyhaveanaccount: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    TextSmallLogin: {
        fontFamily: 'Poppins',
        color: 'rgba(24, 119, 242, 1)',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.12,

    },
    TextUsernamePW: {
        fontFamily: 'Poppins',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.12,
        color: 'rgba(78, 75, 102, 1)'
    }


})
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
// import React, { useState, useEffect } from 'react'

// const Signup = (props) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirm_password, setConfirmPassword] = useState('');
//     const [name, setName] = useState('');
//     const { setShowRegister } = props;
//     const onRegister = async () => {
//         let data = { email, password, name, confirm_password }
//         const doFetch = async (data) => {
//             let url = 'http://10.82.147.210:3000/api/User/signup'
//             const response = await fetch(url, {
//                 method: "POST", 
//                 headers: {
//                     "Content-Type": "application/json",
//                 }, body: JSON.stringify(data), 
//             });
//             return response.json(); 
//         }
//         const res = await doFetch(data);
//         console.log(res);
//     }

//     return (
//         <View>
//             <Text style={styles.text}>Register</Text>
//             <TextInput placeholder="Email" value={email}
//                 onChangeText={setEmail} />
//             <TextInput placeholder="Password" value={password}
//                 onChangeText={setPassword} />
//             <TextInput placeholder="Confirm Password" value={confirm_password}
//                 onChangeText={setConfirmPassword} />
//             <TextInput placeholder="Name" value={name}
//                 onChangeText={setName} />
//             <Button title="Register" onPress={onRegister} />
//             <Button title="Login" onPress={() => setShowRegister(false)} />
//         </View>
//     )
// }

// export default Signup

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 30,
//         color: 'red',

//     }
// })

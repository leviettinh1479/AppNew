import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'
const NewList2 = (props) => {
    const { data, navigation } = props;
    const leftSwipe = () => {
        return (
            <View styles={{ width: 90, height: 90, backgroundColor: 'black' }}>
                <Text>Delete</Text>
            </View>
        )
    };
    return (
        <Swipeable renderRightActions={leftSwipe}>
            <View style={styles.Container}>
                <Image style={styles.Imagestyle} source={{ uri: data.image }} />
                <View style={styles.Viewtitle}>
                    <Text style={[styles.TextTitle]}>{data.title} </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                        <View style={{ backgroundColor: 'rgba(244, 244, 244, 1)', borderRadius: 30, width: 98, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Pressable style={{ backgroundColor: 'white', borderRadius: 50, width: 20, height: 20 }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../image/Tru.png')}></Image>
                            </Pressable>
                            <TextInput style={{ width: 60 }} placeholderTextColor={'white'}></TextInput>
                            <Pressable style={{ backgroundColor: 'white', borderRadius: 50, width: 20, height: 20 }}>
                                <Image style={{ width: 20, height: 20 }} source={require('../image/Cong.png')}></Image>
                            </Pressable>
                        </View>
                        <View style={{ marginLeft: 50 }}>
                            <Text numberOfLines={1}>${data.content}kg</Text>
                        </View>
                    </View>
                </View>
            </View>

        </Swipeable>
    )
}
export default NewList2
const styles = StyleSheet.create({
    Container: {

        flexDirection: 'row',
        marginTop: 16.7,
        marginBottom: 16.7,


    },
    Imagestyle: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    TextTitle: {
        color: 'rgba(109, 56, 5, 1)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 18,
        letterSpacing: 0.12,

    },
    Viewtitle: {
        width: 160,
        marginLeft: 10,

    },

})
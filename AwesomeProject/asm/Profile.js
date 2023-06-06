import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from './ultil/Appcontext';
import AxiosIntance from './ultil/AxiosIntance';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Dialog from "react-native-dialog";
import NewList from './NewList';





const Profile = (props) => {
    const { inforuser, setinforuser } = useContext(AppContext);
    console.log(inforuser);
    const { navigation } = props;
    const [text, settext] = useState("");
    const [visible, setVisible] = useState(false);
    const [dataNe, setdataNe] = useState([]);

    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const clickchupanh = async () => {
        const result = await launchCamera();
        console.log(result);
        console.log(result.assets[0].uri);

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
        })

        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        console.log(response.data.path);
        setinforuser({ ...inforuser, avatar: response.data.path });

    }
    const clickanhthuvien = async () => {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri);
    
        const formdata = new FormData();
        formdata.append('image', {
          uri: result.assets[0].uri,
          type: 'image/jpeg',
          name: 'image.jpg',
        })
    
        const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
        console.log(response.data.path);
        setimage(response.data.path);
      }
    const updateprofile = async () => {
        const response = await AxiosIntance().post("/users/update-profile", { name: inforuser.name, address: inforuser.address, phone: inforuser.phone, dob: inforuser.dob, avatar: inforuser.avatar });
        if (response.error == false) {
            ToastAndroid.show("Update successful", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Update failed", ToastAndroid.SHORT);

        }

    }

    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.ViewEditprofile}>
                    <Image source={require('../image/ArrowLeft.png')}></Image>
                    <Text style={styles.TextFillyourProfile}>{inforuser.email}</Text>
                    <Text></Text>

                </View>
                <TouchableOpacity onPress={clickchupanh}>
                    {
                        inforuser.avatar == ""
                            ?
                            <Pressable onPress={showDialog}>
                            <View style={styles.ViewImage}>
                                <Image style={styles.ImageAvatar} source={require('../image/Avatar.png')}></Image>
                                <Image style={styles.Camera} source={require('../image/Frame.png')}></Image>
                            </View>
                            </Pressable>
                            :
                            <Pressable onPress={showDialog}>
                            <View style={styles.ViewImage}>
                                <Image style={styles.ImageAvatar} source={{ uri: inforuser.avatar }}></Image>
                                <Image style={styles.Camera} source={require('../image/Frame.png')}></Image>
                            </View>
                            </Pressable>


                    }
                </TouchableOpacity>



                <Text style={styles.TextUsernamePW2}>Username</Text>

                <TextInput style={styles.input} value={inforuser.dob} onChangeText={(text) => setinforuser({ ...inforuser, dob: text })} />
                <Text style={styles.TextUsernamePW2}>Full Name</Text>

                <TextInput style={styles.input} value={inforuser.name} onChangeText={(text) => setinforuser({ ...inforuser, name: text })} />

                <View style={styles.ViewUsername}>
                    <Text style={styles.TextUsernamePW}>Email Address</Text>
                    <Text style={styles.Daunhan}>*</Text>
                </View>


                <TextInput style={styles.input} value={inforuser.address} onChangeText={(text) => setinforuser({ ...inforuser, address: text })} />
                <View style={styles.ViewUsername}>
                    <Text style={styles.TextUsernamePW}>Phone Number</Text>
                    <Text style={styles.Daunhan}>*</Text>
                </View>


                <TextInput style={styles.input} value={inforuser.phone} onChangeText={(text) => setinforuser({ ...inforuser, phone: text })} />
                <Pressable style={styles.ButtonNext} onPress={updateprofile}>
                    <Text style={styles.TextNext}>Update</Text>
                </Pressable>
            
            </ScrollView>
            <Dialog.Container visible={visible}>
          <Dialog.Title>Add Cover Photo</Dialog.Title>
          <Pressable style={{ backgroundColor: 'rgba(24, 119, 242, 1)', borderRadius: 6, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={clickchupanh}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Take Photo</Text>
          </Pressable>
          <Pressable style={{ marginTop: 5, backgroundColor: 'rgba(24, 119, 242, 1)', borderRadius: 6, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={clickanhthuvien}>
            <Text style={{ fontSize: 16, color: 'white', fontWeight: '600' }}>Library</Text>
          </Pressable>
          <Dialog.Button label="Cancel" onPress={handleCancel} />

        </Dialog.Container>

          

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 24,
    },
    ViewEditprofile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    TextFillyourProfile: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 1)',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,

    },
    ImageAvatar: {
        width: 170,
        height: 170,
        borderRadius: 100
    },
    ViewImage: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'center',

    },
    input: {
        height: 48,
        borderWidth: 2,
        padding: 10,
        borderRadius: 6,
        gap: 10,
        borderColor: 'rgba(78, 75, 102, 1)'
    },
    TextUsernamePW2: {
        marginTop: 16,
        fontFamily: 'Poppins',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.12,
        color: 'rgba(78, 75, 102, 1)'
    },
    TextUsernamePW: {

        fontFamily: 'Poppins',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        letterSpacing: 0.12,
        color: 'rgba(78, 75, 102, 1)'
    },
    ViewUsername: {
        flexDirection: 'row',
        marginTop: 16,
    },
    Daunhan: {
        color: 'red',

    },
    ButtonNext: {

        borderRadius: 10,
        height: 50,
        backgroundColor: 'rgba(24, 119, 242, 1)',
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20


    },
    TextNext: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        fontWeight: '600',
        fontFamily: 'Poppins'

    },
    Camera: {
        position: 'absolute',
        bottom: 10,
        left: 210
    }
})
const Datane = [
    {

        "_id": "1",

        "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",

        "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",

        "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",

        "createdAt": "2023-01-12T06:26:17.539Z",

        "createdBy": {

            "_id": "63ac39aeedf7c80016c57a67",

            "name": "",

            "avatar": ""

        }

    },

    {

        "_id": "2",

        "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",

        "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",

        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA",

        "createdAt": "2023-01-12T06:26:17.539Z",

        "createdBy": {

            "_id": "63ac39aeedf7c80016c57a67",

            "name": "",

            "avatar": ""

        }

    },

    {

        "_id": "3",

        "title": "Đối phó với bài tập Tết",

        "content": "Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.",

        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q",

        "createdAt": "2023-01-12T06:26:17.539Z",

        "createdBy": {

            "_id": "63ac39aeedf7c80016c57a67",

            "name": "",

            "avatar": ""

        }

    },

    {

        "_id": "4",

        "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",

        "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",

        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",

        "createdAt": "2023-01-12T06:26:17.539Z",

        "createdBy": {

            "_id": "63ac39aeedf7c80016c57a67",

            "name": "",

            "avatar": ""

        }

    },

    {

        "_id": "5",

        "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",

        "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",

        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",

        "createdAt": "2023-01-12T06:26:17.539Z",

        "createdBy": {

            "_id": "63ac39aeedf7c80016c57a67",

            "name": "",

            "avatar": ""

        }

    },

    {

        "_id": "6",

        "title": "Nam sinh trả lại hơn 40 triệu đồng nhặt được",

        "content": "Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.",

        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g",

        "createdAt": "2023-01-12T06:26:17.539Z",

        "createdBy": {

            "_id": "63ac39aeedf7c80016c57a67",

            "name": "",

            "avatar": ""

        }

    },

    {

        "_id": "7",

        "title": "Cho con đi ngắm trăng, sao từ bé",

        "content": "Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.",

        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",

        "createdAt": "2023-01-12T06:26:17.539Z",

        "createdBy": {

            "_id": "63ac39aeedf7c80016c57a67",

            "name": "",

            "avatar": ""

        }

    }

]
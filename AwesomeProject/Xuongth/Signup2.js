import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'






const Signup2 = (props) => {
    const {navigation} = props;
    const [username, setusername] = useState("");
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const ClickNe = () =>{
        if(username==""||fullname==""){
            ToastAndroid.show("Còn chỗ chưa điền thông tin",ToastAndroid.SHORT);
            
        }else{
             navigation.navigate('New2');
        }
       
      }
    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.ViewEditprofile}>
                    <Image source={require('../image/vector2.png')}></Image>
                   

                </View>
                <Text style={{fontSize:25,lineHeight:32.55,fontWeight:'700',color:'rgba(12, 26, 48, 1)',marginTop:78}}>Welcome back {'\n'} to Mega Mall</Text>
                <Text style={{fontSize:14,lineHeight:25,fontWeight:'400',color:'rgba(131, 133, 137, 1)'}}> Silahkan masukan data untuk login</Text>
      



                <Text style={styles.TextUsernamePW2}>Email/Phone</Text>
                <TextInput style={styles.input} onChangeText={setusername} placeholder="Masukan Alamat Email/ No Telepon Anda" />
                <Text style={styles.TextUsernamePW2}>Password</Text>
                <View >
                  <TextInput style={styles.input} onChangeText={setfullname} placeholder="Masukan Kata Sandi Akun"/>
                  <Image style={{position:'absolute',right:10,top:10}} source={require('../image/Eyes2.png')}></Image>

                </View>
            

           
                <Pressable style={styles.ButtonNext} onPress={ClickNe} >
                    <Text style={styles.TextNext}>Sign in</Text>
                </Pressable>

                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:50}}>
                    <Text>Forgot Password</Text>
                    <Text style={{color:'blue'}}>Sign up</Text>
                </View>
            
            </ScrollView>
        

          

        </View>
    )
}

export default Signup2

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

        padding: 10,
        borderRadius: 6,
        gap: 10,
        borderColor: 'rgba(250, 250, 250, 1)'
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
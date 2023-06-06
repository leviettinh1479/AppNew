import { StyleSheet, Text, View, Image, Pressable, ScrollView, ToastAndroid ,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import NewList from './NewList'
import AxiosIntance from './ultil/AxiosIntance'



const DetailNew = (props) => {
   const {route} = props;
   const {params} = route;
    const [title,settitle] = useState("");
    const [content,setcontent] = useState("");
    const [imageurl,setimageurl] = useState("");
    const [loading,setloadding] = useState(true);
    useEffect( () => {
        const getDetails = async()=>{
             const response =  await AxiosIntance().get("api/Product/" + params.id );
             console.log(response);
             if(response.products!=""){  
                setimageurl(response.products.image);
            settitle(response.products.name);
            setcontent(response.products.price);
          
            setloadding(false);
             }else{
                ToastAndroid.show("Failed to get data",ToastAndroid.SHORT);
             }
        }
       
    getDetails();
      return () => {
    
      }
    }, [])
    
    return (
        <>
        {
        loading==true ?
        <View>
        <ActivityIndicator size='large' color='#ff0000'/>
            
            <Text>Loading...</Text>
        </View>
        :
        <ScrollView>
            <View style={styles.Container} >


                <View style={styles.ViewLeftShareSetting}>
                    <Image source={require('../image/ArrowLeft.png')}></Image>
                    <View style={styles.ViewShareSetting}>
                        <Image source={require('../image/Share.png')}></Image>
                        <Image source={require('../image/Setting.png')}></Image>

                    </View>

                </View>
                <View style={styles.ViewBBC}>
                    <View style={styles.ViewBBC2}>
                        <Image source={require('../image/BBC.png')}></Image>
                        <View style={styles.ViewTextBBC}>
                            <Text style={styles.TextBBC}>BBC News</Text>
                            <Text>14mins ago</Text>
                        </View>
                    </View>

                    <Pressable style={styles.ButtonFollowing}>
                        <Text style={styles.TextFollowing}>Following</Text>
                    </Pressable>
                </View>
                <View style={styles.ViewImageShip}>
                <Image style={{width:400,height:230}} source={{uri:imageurl}}></Image>

                </View>
                <Text style={styles.Text1}>Europe</Text>
                <Text style={styles.Text2}>{title}</Text>
                <Text style={styles.Text3}> {content}</Text>
                <Text>Đọc thêm tin tức</Text>
                {
                    Datane.map((item) => <NewList key={item._id} data={item} />)
                }
                <View style={styles.ViewHeartChatContent}>
                    <View style={styles.ViewHeartChat}>
                        <View style={styles.ViewHeart}>
                            <Image source={require('../image/Heart.png')}></Image>
                            <Text>24.5K</Text>
                        </View>
                        <View style={styles.ViewChat}>
                            <Image source={require('../image/Chat.png')}></Image>
                            <Text>1K</Text>
                        </View>

                    </View>
                    <Image source={require('../image/Content.png')}></Image>
                </View>
            </View>
        </ScrollView>
        }
        </>
            
        
        
    )
}

export default DetailNew

const styles = StyleSheet.create({
    Container: {

        marginLeft: 25,
        marginRight: 25,
        marginTop: 24,



    },
    ViewLeftShareSetting: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ViewShareSetting: {
        flexDirection: 'row'
    },
    ViewBBC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ViewBBC2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ViewTextBBC: {
        marginLeft: 10
    },
    TextBBC: {
        color: 'rgba(0, 0, 0, 1)',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    ButtonFollowing: {
        width: 102,
        height: 34,
        borderRadius: 6,
        padding: 5,
        gap: 4,
        backgroundColor: 'rgba(24, 119, 242, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextFollowing: {
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    ViewImageShip: {
        marginTop: 16,
        alignItems: 'center'
    },
    Text1: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: 'rgba(78, 75, 102, 1)',
        fontFamily: 'Poppins',
        marginTop: 12
    },
    Text2: {
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.12,
        color: 'rgba(0, 0, 0, 1))',
        fontFamily: 'Poppins',
        marginTop: 4
    },
    Text3: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: 'rgba(78, 75, 102, 1)',
        fontFamily: 'Poppins',
        marginTop: 4
    },
    ViewHeartChatContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:20
        
    },
    ViewHeart: {
        flexDirection: 'row',

    },
    ViewChat: {
        flexDirection: 'row',
        marginLeft: 20
    },
    ViewHeartChat: {
        flexDirection: 'row',


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
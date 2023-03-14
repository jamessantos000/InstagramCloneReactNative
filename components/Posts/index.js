import React, {useState, useEffect} from "react";
import {Text, View, FlatList, Image, SafeAreaView} from 'react-native'
import styles from "./style";
import Header from "../Header";
import moment from 'moment';
import 'moment/locale/pt-br';
import Menu from "../MenuFooter";
import * as Font from 'expo-font';
import { SimpleLineIcons, EvilIcons, Ionicons, Feather, FontAwesome } from 'react-native-vector-icons';
Font.loadAsync({
    'insta-font-general': require('../../src/fonts/SF-UI-Display-Regular-1.ttf'),
  });
export default function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        try {
          const response = await fetch('https://rest-full-instacom.vercel.app/posts');
          const json = await response.json();
          setPosts(json.post);

        } catch (error) {
          console.error(error);
        }
    };

    return(
      <SafeAreaView>
        <FlatList 
            data={posts}
            ListHeaderComponent={<Header />}
            stickyHeaderIndices={[0]}
            renderItem={listPost}
            keyExtractor={(item) => item.author}
            style={{zIndex: 0, height: '93%'}}
        />
        <Menu />
      </SafeAreaView>  
    );
}

const listPost = ({ item }) => {
    moment.locale('pt-br');
    const dateTime = moment(item.datetime);
    const formatDateTime = dateTime.format('DD [de] MMMM [de] YYYY'); // Formato por extenso: Segunda-feira, 14 de março de 2022 10:30

    return(
        <SafeAreaView style={styles.Posts}>
            <View style={styles.lineAuthor}>
                <Image source={{uri: item.picture}} style={{height: 50, width: 50, borderRadius: 50}} />
                <View>
                    <Text style={styles.txtUsername}>{item.username}</Text>
                </View>
                <SimpleLineIcons name="options" size={17} style={styles.icoOption} />
            </View>

            <Image source={{uri: item.thumbnail}} style={styles.thumbnailPost} />
            
            <View style={styles.lineActions}>
                <View style={styles.rapid}>
                <EvilIcons name="heart" size={35} style={styles.icoAction} />
                <Ionicons name="chatbubble-outline" size={25} style={styles.icoAction} />
                <Feather name="send" size={25} style={styles.icoAction} />
                </View>
                <FontAwesome name="bookmark-o" size={30} style={styles.icoBookmark} />
            </View>

            <View style={styles.contextPost}>
                <Text style={styles.txtLiked}>100 Likes</Text>
                <Text><Text style={{fontWeight: "bold"}}>{item.username}</Text> {item.description}</Text>
                <Text style={styles.postDate}>{formatDateTime}</Text>
            </View>
        </SafeAreaView>
    );
};




// const listPost = ({ item }) => {
//     return(
//         <View style={{backgroundColor: 'blue', flex: 1, justifyContent: "space-between"}}>
//             <Text>API OK</Text>
//         </View>
//     );
// }
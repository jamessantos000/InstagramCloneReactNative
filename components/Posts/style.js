import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Posts:{
        marginBottom: 20,
    },
    lineAuthor:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    txtUsername:{
        marginLeft: 15,
        fontSize: 12,
        fontFamily:'insta-font-general',
        fontWeight: "bold",
    },
    thumbnailPost:{
        width: '100%',
        height: 300,
        resizeMode: "cover"
    },
    icoOption:{
        flex: 1,
        textAlign: "right"
    },
    lineActions:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 15
    },
    rapid:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 5
    },
    icoAction:{
        margin: 5
    },
    icoBookmark:{
        flex: 1,
        textAlign: "right"
    },
    contextPost:{
        paddingLeft: 15,
        paddingRight: 15
    },
    txtLiked:{
        fontFamily:'insta-font-general',
        fontWeight: "bold"
    },
    postDate:{
        fontFamily: 'Roboto',
        fontSize: 10,
        color: '#8a8a8a',
        marginTop: 15
    }
});

export default styles;
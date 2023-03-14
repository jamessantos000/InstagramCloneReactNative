import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#FFF',
        padding: 10
    },
    headerLeft:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    txtLogo:{
        fontFamily: 'insta-font',
        fontSize: 30
    },
    icoH:{
        margin: 10
    },
    iconRight:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
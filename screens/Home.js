import React, {Component} from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MetasCard from "../Components/MetasCard";

export default class Home extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Image source = {require("../assets/Minky_icon.jpg")} style = {styles.profileImage}></Image>
                    <View style = {styles.headerContainer}>
                        <Text>Olá, seja bem vindo</Text>
                        <Text style = {styles.headerName}>Alanna</Text>
                    </View>
                </View>
                <View style = {styles.metasContainer}>
                    <MetasCard/>
                </View>
                <View style = {styles.gallery}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        justifyContent: "flex-start", 
        flexDirection: "row"
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: "100%",
        marginRight: 10
    },
    metasContainer: {
        backgrounColor: "red",
        height: 100
    },
    gallery: {

    },
    headerName: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
import React, {Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import {Star, ShareNetwork} from "phosphor-react"

export default class MetasCard extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.title}>Metas</Text>
                <View style={styles.metasContainer}>
                         <View style={styles.metasItem}>
                               <Star size={32} weight="fill" color="gold"/>
                               <Text style={styles.metasItemTitle}>Meta 1</Text>
                               <ShareNetwork size={32} weight="fill" />
                         </View>
                         <View style={styles.metasItem}>
                               <Star size={32} weight="fill" color="gold" />
                               <Text style={styles.metasItemTitle}>Meta 2</Text>
                               <ShareNetwork size={32} weight="fill" />
                         </View>
                         <View style={styles.metasItem}>
                               <Star size={32} weight="fill" color="grey"/>
                               <Text style={styles.metasItemTitle}>Meta 3</Text>
                               <ShareNetwork size={32} weight="fill" />
                         </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey"
    },
    title:{
     fontSize: 25,
     fontWeight: "bold"
    },
    metasItem:{
     marginBottom: 30,
    }
})
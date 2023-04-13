import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Question1 = (navigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.question}>Quel est le type d'un fichier javascrip?</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.assert}>
                   <Text>.ts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assert}>
                    <Text>.ts</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.assert}>
                    <Text>.ts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.assert}>
                    <Text>.ts</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botton}>
                <TouchableOpacity style={styles.buttonAnnu}><Text style={styles.buttonText}>ANNULE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonSuiv}><Text style={styles.buttonText}>SUIVANT</Text></TouchableOpacity>
                {/* <TouchableOpacity onPress={()=> navigation.navigate("Result")}><Text>TERMINER</Text></TouchableOpacity> */}
            </View>
        </View>
    )
}

export default Question1

const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: "100%",

    },
    top: {
        marginVertical: 16,
        marginTop: 40,
    },
    options: {
        marginVertical: 16,
        marginTop: 100,
        flex: 1,
        gap:10,
    },
    botton: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    buttonSuiv: {
        backgroundColor: "#314539",
        padding:12,
        paddingHorizontal:46,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 38,
    },
    buttonAnnu:{
        backgroundColor:"#E63030",
        padding:12,
        paddingHorizontal:46,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 38,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    assert:{
        backgroundColor: "#534D4D",
        height: 50,
        padding:15,
        borderRadius:10,
        
    }, 
    question: {
        fontSize: 22,
    }

});
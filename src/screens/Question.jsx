import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Question = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>Quel est le type d'un fichier javascrip?</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity>
                    <Text>.ts</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>.ts</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>.ts</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>.ts</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.botton}>
                <TouchableOpacity><Text>Annulé</Text></TouchableOpacity>
                <TouchableOpacity><Text>Suivant</Text></TouchableOpacity>
                <TouchableOpacity><Text>Terminer</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    container:{
        padding: 12,
        height: "100%",
    },
    top:{
        marginVertical:16,
    },
    options:{
        marginVertical:16,
        flex:1,
    },
    botton: {
        marginBottom:12,
        paddingVertical:16,
        justifyContent:"space-between",
        flexDirection:"row",
    }
});
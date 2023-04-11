import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button } from 'react-native-paper';

const Question = () => {
    const [value, setValue] = React.useState('first');

    return (
        <PaperProvider>
            <View style={styles.screenContainer}>
                <View>
                    <View>
                        <Text style={styles.questionCounter}>Question 1/20</Text>
                        <Text style={styles.questionLabel}>
                            Comment supprimer les espaces en début et fin de la chaîne ch1 ?
                        </Text>
                    </View>
                    <View>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            <RadioButton.Item label="First item" value="first" uncheckedColor='#000' color='green' style={styles.radioItems} />
                            <RadioButton.Item label="Second item" value="second" uncheckedColor='#000' color='green' style={styles.radioItems} />
                            <RadioButton.Item label="First item" value="third" uncheckedColor='#000' color='green' style={styles.radioItems} />
                            <RadioButton.Item label="Second item" value="fourth" uncheckedColor='#000' color='green' style={styles.radioItems} />
                        </RadioButton.Group>
                    </View>
                </View>
                <View>
                    <Button mode="contained" onPress={() => console.log('Pressed')} buttonColor='green' style={styles.buttonNext}>
                        SUIVANT
                    </Button>
                </View>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    radioItems: {
        backgroundColor: 'lightgray',
        borderRadius: 6,
        paddingVertical: 15,
        marginVertical: 8
    },
    questionCounter: {
        color: 'green',
        fontSize: 15,
        fontWeight: 'bold'
    },
    questionLabel: {
        // fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 15
    },
    buttonNext: {
        borderRadius: 6,
        paddingVertical: 10
    }
});

export default Question
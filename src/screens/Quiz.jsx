import { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button } from 'react-native-paper';
import questions from '../data/questions';
import ProgressBar from '../components/progressbar/ProgressBar';

const Quiz = ({ navigation }) => {
    const allQuestions = questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [progress, setProgress] = useState(new Animated.Value(0));

    const validateAnswer = () => {
        let correct_option = allQuestions[currentQuestionIndex]['reponseIndex'];
        if (currentOptionSelected == correct_option) {
            // Set Score
            setScore(score + 1)
        }
    }

    const handleNext = () => {
        validateAnswer();
        if (currentQuestionIndex == allQuestions.length - 1) {
            Alert.alert('Votre score est de' + score);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    return (
        <PaperProvider>
            <View style={styles.screenContainer}>
                <View>
                    <View>
                        <ProgressBar allQuestions={allQuestions} progress={progress} />
                        <Text style={styles.questionCounter}>{currentQuestionIndex + 1} / {allQuestions.length}</Text>
                        <Text style={styles.questionLabel}>
                            {allQuestions[currentQuestionIndex]?.titre}
                        </Text>
                        <Text>Score: {score}</Text>
                    </View>
                    <View>
                        <RadioButton.Group onValueChange={value => setCurrentOptionSelected(value)} value={currentOptionSelected}>
                            {
                                allQuestions[currentQuestionIndex].assertions.map((assertion, index) => (
                                    <RadioButton.Item key={index} label={assertion} value={index} uncheckedColor='#000' color='green' style={styles.radioItems} />
                                ))
                            }
                        </RadioButton.Group>
                    </View>
                </View>
                <View>
                    <Button mode="contained" onPress={handleNext} buttonColor='green' style={styles.buttonNext} disabled={currentOptionSelected === null ? true : false}>
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
        paddingBottom: 15,
        marginTop: 50
    },
    radioItems: {
        backgroundColor: 'lightgray',
        borderRadius: 6,
        paddingVertical: 15,
        marginVertical: 6
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

export default Quiz;
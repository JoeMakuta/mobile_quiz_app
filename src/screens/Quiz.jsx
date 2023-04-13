import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Alert } from 'react-native';
import { Provider as PaperProvider, RadioButton, Button } from 'react-native-paper';
import questions from '../data/questions';
import ProgressBar from '../components/progressbar/ProgressBar';

const Quiz = () => {
    const allQuestions = questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [value, setValue] = useState('first');

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if (selectedOption == correct_option) {
            // Set Score
            setScore(score + 1)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }


    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
                    }}>
                    <Text style={{ fontSize: 20, color: COLORS.white, textAlign: 'center' }}>Next</Text>
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }



    return (
        <PaperProvider>
            <View style={styles.screenContainer}>
                <ProgressBar allQuestions={allQuestions} />
                <View>
                    <View>
                        <Text style={styles.questionCounter}>{currentQuestionIndex + 1} / {allQuestions.length}</Text>
                        <Text style={styles.questionLabel}>
                            {allQuestions[currentQuestionIndex]?.titre}
                        </Text>
                    </View>
                    <View>
                        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                            {
                                allQuestions[currentQuestionIndex].assertions.map((assertion, index) => (
                                    <RadioButton.Item key={index} label={assertion} value={assertion} uncheckedColor='#000' color='green' style={styles.radioItems} />
                                ))
                            }
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
import { useState } from 'react';
import { View, Animated } from 'react-native';

const ProgressBar = ({allQuestions, progress}) => {
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })

    return (
        <View style={{
            width: '100%',
            height: 20,
            borderRadius: 20,
            backgroundColor: '#00000020',

        }}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor: "green"
            }, {
                width: progressAnim
            }]}>

            </Animated.View>

        </View>
    )
}


export default ProgressBar;